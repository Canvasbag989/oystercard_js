function Oystercard() {
    this.balance = 0;
    this.maximumBalance = 30;
    };
    
    Oystercard.prototype.topup = function(num) {
        
      if (this.balance + num > 30){
            this.errorMaximumBalance();
            
        }
        else {
            this.balance += num
        }
       
    
    };
    Oystercard.prototype.errorMaximumBalance = function() {
     if(this.balance == this.maximumBalance){ 
      throw ('Topup limit exceeded')
     };
    };
    