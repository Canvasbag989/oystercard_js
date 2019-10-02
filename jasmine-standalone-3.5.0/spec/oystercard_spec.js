
describe('oystercard', function() {
var oystercard;
    beforeEach(function(){
        oystercard = new Oystercard()
    });
    it('can top up', function() {
        
        oystercard.topup(10);
        expect(oystercard.balance).toEqual(10);
    })

    it('has maximum topup limit and raises error', function(){
        var errorMaximumBalance = 30;
        oystercard.topup(30);
        expect(function(){oystercard.topup(1)}).toThrow('Topup limit exceeded');
    })
})