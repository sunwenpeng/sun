/**
 * Created with JetBrains RubyMine.
 * User: sun
 * Date: 13-9-24
 * Time: 下午3:17
 * To change this template use File | Settings | File Templates.
 */
  function random_num(){
    var randomnum=Math.floor(Math.random()*10000);
    var a=randomnum%10;
    var b=a/10%10;
    var c=b/10%10;
    var d=c/10%10;
    if(randomnum!=10000&&a!=b&&b!=c&&c!=d&&a!=c&&a!=d&&b!=d){
        return randomnum;
     }
    else{return random_num();};
    ;
};