<!DOCTYPE html>
<?php include("head.php"); ?>
<head>
</head>
<style> <?php include 'default.css'; ?> </style>

<?php
$adj = $_POST['adjective'];
$place = $_POST['place'];
$verb = $_POST['verb'];
$lover = $_POST['lover'];
$want = $_POST['want'];
$talent = $_POST['talent'];
$treat = $_POST['treat'];
?>





  <body>
    <center>
      <table class="t_bar">
        <tr>
          <td>
            <span class="boldtop"><span class="topred">Valentine </span>Mad</span>Lib!
          </td>
          </tr>
      </table>
      <br><br>
      <br><br>
      <div class="cont_top">
        &rarr; <b>Here is your MadLib!</b> &larr;
      </div>
      <div class="container">
On a(n) <b><?php echo $adj; ?></b> day, you wake up at <b><?php echo $place; ?></b>. You continue doing your daily business including <b><?php echo $talent; ?></b> and <b><?php echo $verb; ?></b>.<br><br> Sigh, this day is boring so far. Later in the afternoon, <b><?php echo $lover; ?></b> reveals that she works at TopCoder and wants to have you work there as well!<br><br> Man, this day is getting better! You get invited to the Valentines party and you get notified that TopCoder loves people who love <b><?php echo $talent; ?></b>.<br><br> Your day is so amazing this day but it is starting to end.<br><br> But before it ends, <b><?php echo $lover; ?></b> gives you something you always wanted: <b><?php echo $want; ?></b> and some <b><?php echo $treat; ?></b> to go along with it. The day is ending and you go to sleep. <br><br><b><?php echo $lover; ?></b> kisses you goodnight and whispers, "Happy Valentines."<br>
        <br>
      </div>
      <div class="cont_bottom"></div>
      <br><br>
  </center>
  </body>
</html>