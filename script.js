var Body = {
    setColor: function (color) {
        $('body').css('color', color)
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color)
    }
}
var Links = {
    setColor: function (color) {
       $('a').css('color', color)
}
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === '야간 모드로 전환') {
        self.value = '야간 모드 해제';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
        alert('야간 모드!');
    } else {
        self.value = '야간 모드로 전환';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        alert('야간 모드 해제!');
    }
}