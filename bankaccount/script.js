function Contact(name, depositAmount, withdrawAmount, initialDeposit, balance,) {
	this.firstName = name;
	this.depositAmount = depositAmount;
	this.withdrowAmount = withdrawAmount;
	this.initialDeposit = initialDeposit;
	this.balance = balance;
	
}
Contact.prototype.fullName = function () {
	return (
		this.firstName +
		' ' +
		this.deposit +
		' ' +
		this.withdrow +
		' ' +
		this.initial +
		' ' +
		this.balance +
		' ' +
		this.motherName 

	);
};
// console.log(Contact.fullName());
$(document).ready(function(){
    $('#btn').click(function(){
        var name = $('input#account').val()
        var depositAmount= $("input#amount").val()
        var withdrowAmount= $('input#amount').val()
        var withdrowAmount= $('input#amount').val()
        var initialDeposit= $('input#amount').val()
        var balance= $('input#amount').val()
        var data = new Contact(name, depositAmount, withdrowAmount, initialDeposit,balance )
        console.log(data)
    })
    $('#contacts').append("<li><span class='contact'>" + Contact.fullName() + '</span></li>');

    $('ol#addresses').text('');
    newContact.addresses.forEach(function (address) {
        $('ol#addresses').append('<li>' + address.distrcit + ', ' + address.sector + ' ' + address.cell + '</li>');
    });
    $('.contact').last().click(function () {
        $('#show-contact').show();
        $('#show-contact h2').text(Contact.fullName());
        $('.first-name').text(Contact.firstName);
        $('.last-name').text(Contact.lastName);
        $('.deposit').text(Contact.deposit);
        $('.withdrow').text(Contact.withdraw);
        $('.initial').text(Contact.initial);
        $('.balance').text(Contact.balance);
        
        $('ol#addresses').text('');
        newContact.addresses.forEach(function (address) {
            $('ol#addresses').append('<li>' + address.name + ', ' + address.deposit + ' ' + address.withdraw + ' '+ initial+' '+balance + '</li>')
        });
    });
})
