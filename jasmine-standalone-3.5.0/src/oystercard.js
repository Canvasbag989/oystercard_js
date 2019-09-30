function Oystercard() {
this.balance = 0;
}

Oystercard.prototype.topup = function(num) {
    this.balance += num
}