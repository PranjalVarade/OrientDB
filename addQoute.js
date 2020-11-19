var fname = firstName;
var que = qoutes;

var imp = orient.getDatabase().command("insert into qoute (qoutes) values ('"+que+"')");
var final =orient.getDatabase().command("CREATE edge post FROM (SELECT FROM user WHERE firstName =('"+fname"')) TO (SELECT FROM qoute WHERE qoutes =('"+que+'))");
return final;