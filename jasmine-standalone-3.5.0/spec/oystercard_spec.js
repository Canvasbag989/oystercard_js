describe('oystercard', function() {
    it('can top up', function() {
        oystercard = new Oystercard();
        oystercard.topup(10);
        expect(oystercard.balance).toEqual(10);
    })
}) 