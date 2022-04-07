function bind(lastName) {
    let firstName = 'Yakov';
    let c = 0;

    function father(length) {
      
        for (i = 0; i < length; i++) {
            c += 1;
            console.log(c + ' ' + firstName + ' ' + lastName);
        }
    }
    father(4);
}
bind('Lemenkov');