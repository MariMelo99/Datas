/*pega o dia*/
let data = new Date()
document.write (data)
document.write("<br><br>")

/*pega o dia*/
let data1 = new Date().getDate()
document.write(data1)
document.write("<br><br>")

/*pega o dia com o 0 na frente*/
let data2 = new Date().getDate()
document.write(('0' +data2).slice(0-2));
document.write("<br><br>")

/*pega o mês*/
let data3 = new Date().getMonth()+5
document.write(data3)
document.write("<br><br>")

/*pega o ano*/
let data4 = new Date().getFullYear()
document.write(data4)
document.write("<br><br>")

/*pega o dia da semana no array*/
let data5 = new Date()
let diasSemana=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
document.write(diasSemana[data5.getDay()])
document.write("<br><br>")

/*retorna a data no padrão americano*/
let data6 = new Date()
document.write(data.toDateString());
document.write("<br><br>")

/*retorna a data completa no padrão navegador*/
let data7 = new Date()
document.write(data7.toLocaleDateString());
document.write("<br><br>")

/*formatação completa*/
let data8 = new Date()
let dia =('0' +data8.getDate()).slice(-2)
let mes =data8.getMonth()
let meses =['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let ano=data8.getFullYear()

document.write(dia + ' de ' +meses[mes]+ ' de ' +ano)



