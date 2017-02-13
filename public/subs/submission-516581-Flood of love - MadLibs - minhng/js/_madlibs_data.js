var graph_json = '{\
   "options": {\
     "directed": true,\
     "multigraph": false,\
     "compound": false\
   },\
   "nodes": [\
        { "v": "S", "value": "START" },\
        { "v": "p1_1_intro", "value": "P1 Introduction" },\
        { "v": "p1_2_habit", "value": "P1 Habit" },\
        { "v": "p1_3_hangout", "value": "P1 Hangout" },\
        { "v": "p1_3_loving_scene", "value": "P1 Loving Scene" },\
        { "v": "FIL", "value": "FALL IN LOVE" },\
        { "v": "p1_5_argue", "value": "P1 Argue" },\
        { "v": "p1_6_regret", "value": "P1 Regret" },\
        { "v": "p1_7_forgive", "value": "P1 Forgive" },\
        { "v": "END", "value": "HAPPY ENDING" },\
        { "v": "p2_1_intro", "value": "P2 Introduction" },\
        { "v": "p2_3_hangout", "value": "P2 Hangout" },\
        { "v": "p2_5_argue", "value": "P2 Argue" },\
        { "v": "p2_7_forgive", "value": "P2 Forgive" }\
   ],\
   "edges": [\
        { "v": "S", "w": "p1_1_intro", "value": "[_name_|John(boy)|Mary(girl)] is a [junior coder(girl)|senior coder(boy)|business analyst(boy)|project manager(girl)|project manager(boy)]." },\
        { "v": "p1_1_intro", "w": "p1_2_habit", "value": "[He(boy)|She(girl)] wants to keep [his(boy)|her(girl)] body healthy, so [he(boy)|she(girl)] always wakes up at [_time_] to do exercise." },\
        { "v": "p1_2_habit", "w": "p1_3_hangout", "value": "One day, [he(boy)|she(girl)] went [fishing|swimming|skying] outside the [_place_|town|city]." },\
        { "v": "p1_3_hangout", "w": "p1_3_loving_scene", "value": "[*Character 1*] lost [his(boy)|her(girl)] [_item_|hat|bag|watch] on the trip. A [fabulous girl(boy)|beautiful girl(boy)|handsome man(girl)|tall man(girl)] helped [him(boy)|her(girl)] find it." },\
        { "v": "p1_3_loving_scene", "w": "FIL", "value": "[His(girl)|Her(boy)] name is [_name_|Peter(girl)|Jack(girl)|Holt(girl)|Jessica(boy)|Annie(boy)]. [They fall in love at first sight|They started dating from that day]!" },\
        { "v": "FIL", "w": "p1_5_argue", "value": "They had a big argument after loving [_number_|3|7|10] [days|weeks|months]." },\
        { "v": "p1_5_argue", "w": "p1_6_regret", "value": "[*Character 1*] regretted what [he(boy)|she(girl)] shouted at [his girlfriend(boy)|her boyfriend(girl)]." },\
        { "v": "p1_6_regret", "w": "p1_7_forgive", "value": "[He(boy)|She(girl)] hugged [*Character 2*] and told [him(girl)|her(boy)]: \\"[_quote_|I love you!|Please forgive me...my love!]\\"." },\
        { "v": "p1_7_forgive", "w": "END", "value": "[She(boy)|He(girl)] [cried(boy)|smiled(boy)|smiled(girl)] [_adverb_|happily]. They had a [memorable|wonderful] Valentine." },\
        { "v": "S", "w": "p2_1_intro", "value": "There is a lonely [boy(boy)|girl(girl)] living in a small village. [He(boy)|She(girl)] is afraid of talking to strangers. People in the village call [him(boy)|her(girl)] [_name_|Jack(boy)|Jessie(girl)]. He is working as [an IT guy|a coder|a programmer] in a small company." },\
        { "v": "p2_1_intro", "w": "p1_1_intro", "value": "[His(boy)|Her(girl)] house locates at the [North|South|West|East] of the [_place_|school|hospital|lake|mountain]." },\
        { "v": "p2_1_intro", "w": "p1_2_habit", "value": "[He(boy)|She(girl)] often gets to bed at [_time_|9 PM|10 PM|11 PM]." },\
        { "v": "p1_2_habit", "w": "p2_3_hangout", "value": "[He(boy)|She(girl)] decided to change [himself(boy)|herself(girl)]. [He(boy)|She(girl)] [_adverb_|quickly|carefully] prepared the clothes but [he(boy)|she(girl)] forgot to take [his(boy)|her(girl)] favorite [_item_|books|glasses]." },\
        { "v": "p2_3_hangout", "w": "p1_3_hangout", "value": "" },\
        { "v": "p2_1_intro", "w": "p2_3_hangout", "value": "[He(boy)|She(girl)] many times dreamed about the [wonderful|romantic] [_place_|beach|island] where [he(boy)|she(girl)] could enjoy the scene together with [his(boy)|her(girl)] love. [He(boy)|She(girl)] suddenly wakes up at [_time_|1 AM|2 AM|3 AM]. So [he(boy)|she(girl)] decided to travel to [Hawaii|Bali|Ischia|Phu Quoc] island without plan." },\
        { "v": "p2_3_hangout", "w": "p1_3_loving_scene", "value": "[*Character 1*] met the [fabulous girl(boy)|beautiful girl(boy)|handsome man(girl)|tall man(girl)] who always carries a [_item_|bag|tablet|book|keyboard|laptop] with [him(girl)|her(boy)]." },\
        { "v": "FIL", "w": "p2_5_argue", "value": "[_number_|3|6|8] [days|weeks|months] later, [*Character 1*] got angry because of the joke of [*Character 2*]\'s friend: \\"[_quote_|New boyfriend again?(boy)|New boyfriend again?(girl)]\\"." },\
        { "v": "p2_5_argue", "w": "p1_5_argue", "value": "" },\
        { "v": "p2_5_argue", "w": "p1_6_regret", "value": "That friend [was sorry about the joke and|knew that he did something wrong, so he(girl)|knew that she did something wrong, so she(boy)] told [*Character 1*] the truth. Without any hesitation, [*Character 1*] ran [_adverb_|quickly] to [*Character 2*]\'s house." },\
        { "v": "p1_7_forgive", "w": "p2_7_forgive", "value": "[*Character 2*] believed that [*Character 1*] told this from the bottom of [his(boy)|her(girl)] heart. [He(girl)|She(boy)] kissed [*Character 1*]. They walked [_adverb_|slowly] on the way beside the [_place_|river|park|lake]. [So sweeeet.]" },\
        { "v": "p2_7_forgive", "w": "END", "value": "Their \\"Valentine\\" seems lasting forever." }\
   ]}';