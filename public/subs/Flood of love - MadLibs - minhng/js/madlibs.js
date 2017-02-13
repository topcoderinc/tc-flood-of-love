// ----------- GLOBAL VARIABLES -----------
//var IS_STAGING = true;

var genderStr = ["(boy)", "(girl)"];
var genderIndex = getRandomInt(0,1);
var characters = ["Character 1", "Character 2"];
var main = -1;

/* _madlibs_data.js */
var graph = graphlib.json.read(JSON.parse(graph_json));
// ----------- End - GLOBAL VARIABLES -----------

function generateClassWeekString(sharedProperties) {
    return 'class' + sharedProperties.getCurrentTAClass() + '_' + 'week' + sharedProperties.getCurrentTAWeek();
}

function getTodayYYYYMMddHHmmss() {
    var date = new Date();
    return date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() + 1 ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideShowMadLibs(is_madlibs_input) {
    if (is_madlibs_input === 1) {
        $('#madlibs_input').hide();
        $('#madlibs_output').show();
    } else {
        $('#madlibs_input').show();
        $('#madlibs_output').hide();
    }
}

function generateSentence(template, keyvalues) {
    var str = template;
    var res = str.match(/\[.+?\]/gi);
    
    for (ind in res) {
        var pat = res[ind].substring(1,res[ind].length-1).split("|");        
        var repl = "";
        var is_repeat = true;
        
        if(keyvalues[pat[0]]) {
            repl = "<span style='color:brown;font-weight:bold;'>" + keyvalues[pat[0]] + "</span>";
            is_repeat = false;
        }
        
        var max_loop = 100;
        var count = 0;
        while (is_repeat && count++ < max_loop) {      
            var start = pat[0].indexOf("_")>=0?1:0;
            var choose = getRandomInt(start, pat.length-1);
            
            /*console.log(pat);
            console.log(choose);
            console.log(count);*/ 
            
            if (pat[choose].match(/\*.+?\*/gi)) {
                console.log(pat[choose]);
                var pos = Number(pat[choose].match(/[0-9]+?/gi)[0])-1;
                console.log(pos);
                repl = (pos==main)?"<span style='color:brown;font-weight:bold;'>" + characters[pos] + "</span>":characters[pos];
                break;
            }
            
            if (pat[choose].indexOf("(boy)") >= 0 || pat[choose].indexOf("(girl)") >= 0) {
                if (pat[choose].indexOf(genderStr[genderIndex]) >= 0) {
                    repl = pat[choose].replace(genderStr[genderIndex], "");
                    is_repeat = false;
                    
                    if (pat[0]=="_name_") {                        
                        var pos = (main<0)?0:1;
                        characters[pos] = repl;
                    }
                }
            } else {          
                /*repl = pat[choose];
                is_repeat = false;*/                
                
                var has_value = keyvalues[pat[choose]];                
                repl = "<span style='color:brown;font-weight:bold;'>" + keyvalues[pat[choose]] + "</span>";
                if (!has_value) {
                    repl = pat[choose];                    
                }
                is_repeat = false;        
            }
        }        
        str = str.replace(res[ind], repl);
    }
    return str;
}

function generateSentenceTemplateRandomly() {
    var CURRENT_VERTEX = "S";
    var DESTINATION_VERTEX = "END";

    var story_sentence_templates = [];
    var count = 0;
    var choose = -1;
    while(CURRENT_VERTEX != DESTINATION_VERTEX) {
        var graphOut = graph.outEdges(CURRENT_VERTEX);
        // => `[ { v: 'S', w: 'p1_1_intro' }, { v: 'S', w: 'p1_3_hangout' } ]`
        // console.log(graphOut);

        choose = getRandomInt(0,graphOut.length-1);
        var NEXT_VERTEX = graphOut[choose].w;

        story_sentence_templates[count++] = graph.edge(CURRENT_VERTEX, NEXT_VERTEX);

        CURRENT_VERTEX = NEXT_VERTEX;
    }
    return story_sentence_templates;
}

$( document ).ready(function() {    
    $("form").submit(function(e){
        e.preventDefault(e);
        
        genderIndex = getRandomInt(0,1);
        
        var story_sentence_templates = [];
        //var story_sentence_is_replaced = [];
        var replacements = [];
        var max_loop = 10;
        var count = 0;
        var inputs = {};
        var usages = {};
        while(count++ < max_loop) {
            story_sentence_templates = generateSentenceTemplateRandomly();
            //for (ind in story_sentence_templates) { story_sentence_is_replaced[ind] = false; }
            replacements = story_sentence_templates.join().match(/_.+?_/gi);
            
            // check replacements vs inputs
            var replacements_joined = replacements.join();
            var is_break = true;
            $("input").each(function(index, value) {
                var replacement_symbol = "_" + $(this).attr("id") + "_";
                inputs[replacement_symbol] = $(this).val();
                if (replacements_joined.indexOf(replacement_symbol) < 0) {
                    is_break = is_break & false;
                } else {
                    var repl_counts = 0;
                    for (ind in replacements) {
                        repl_counts += (replacements[ind] == replacement_symbol)?1:0;
                    }                    
                    usages[replacement_symbol] = repl_counts;
                }
            });
            
            if(is_break) {
                console.log("break!");
                break;
            }
            
            console.log("non-break :3");
        }
        
        /*console.log(story_sentence_templates);
        console.log(replacements);
        console.log(inputs);
        console.log(usages);*/
        
        var story = [];
        //var is_first_character = true;
        for (index in story_sentence_templates) {
            var template = story_sentence_templates[index];
            var template_input = [];
            var str = template;
            var res = str.match(/\[.+?\]/gi);
            for (ind in res) {
                var key = res[ind].match(/_.+?_/gi);
                
                if (usages[key] > 0) {
                    if(getRandomInt(1, usages[key]) == 1) {
                        template_input[key] = inputs[key];
                        usages[key] = 0;
                        
                        /* Setup characters */
                        if (key=="_name_" && index == 0) {
                            characters[0] = inputs[key];
                            main = 0;
                        } else if(key=="_name_") {
                            characters[1] = inputs[key];
                            main = 1;
                        }
                        
                    } else {
                        usages[key] -= 1;
                    }
                }
            }
            
            story.push(generateSentence(template, template_input));
        }
        
        $("#story").html(story.join(" "));
        hideShowMadLibs(1);
        
        /* DEBUG */
        console.log(characters);
        console.log(main);
    });
});