KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('linetip', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/linetip/1.0.3/']});