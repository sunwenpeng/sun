/**
 * Created with JetBrains RubyMine.
 * User: sun
 * Date: 13-9-24
 * Time: 下午3:54
 * To change this template use File | Settings | File Templates.
 */
   describe('random_num',function(){
       it('four number or not',function(){
           expect(100<=random_num()<=9999).toBeTruthy();
       });
       it('random or not',function(){
           var j=0;
           var a=random_num();
           for(var i=1;i<=1000;i++){
               if(a==random_num()){j++;};
           };
           expect(j<=10).toBeTruthy();
       });
       it('different number',function(){
           var a=Math.floor(Math.random()*10000)%10;
           var b=a/10%10;
           var c=b/10%10;
           var d=c/10%10;
           expect(a!=b&&b!=c&&c!=d&&a!=c&&a!=d&&b!=d).toBeTruthy();
       });
   });