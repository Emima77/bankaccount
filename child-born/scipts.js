
function Contact(first, last, gender, birthday, father, mother, acceptancy, disabilities, district, sector, cell) {
	this.firstName = first;
	this.lastName = last;
	this.gender = gender;
	this.birthday = birthday;
	this.fatherName = father;
	this.motherName = mother;
	this.district = district;
	this.sector = sector;
	this.cell = cell;
}
Contact.prototype.fullName = function () {
	return (
		this.firstName +
		' ' +
		this.lastName +
		' ' +
		this.gender +
		' ' +
		this.birthday +
		' ' +
		this.fatherName +
		' ' +
		this.motherName +
		' ' +
		this.acceptancy +
		' ' +
		this.disabilities +
		' ' +
		this.district +
		' ' +
		this.sector +
		' ' +
		this.cell
	);
};
console.log(Contact.fullName());

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
			$('.gender').text(Contact.gender);
			$('.birthday').text(Contact.birthday);
			$('.fatherName').text(Contact.fatherName);
			$('.motherName').text(Contact.motherName);
			$('.acceptancy').text(Contact.acceptancy);
			$('.disabilities').text(Contact.disabilities);
			$('ol#addresses').text('');
			newContact.addresses.forEach(function (address) {
				$('ol#addresses').append(
					'<li>' + address.district + ', ' + address.sector + ' ' + address.cell + '</li>'
				);
			});
		});

