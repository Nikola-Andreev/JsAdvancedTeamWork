class ListModel {

    render (arr){
        arr.sort((a,b) => {
            return a.id - b.id
        })
        let html = $('<div>').addClass('punch-starter-list-holder')
        let table = $('<table>').addClass('punch-starter-table')
        html.append(table)
        let tableHeader = ['ID', 'Name', 'Manufacturer', 'Type', 'Progress']
        $('.punch-starter-table').append($('<tr>'))
        for (let element of tableHeader){
            $('.punch-starter-table').find('tr').append($('<th>').text(element))
        }
        for (let element of arr){
            let row = $('<tr>')
            for (let i = 0; i < tableHeader.length - 2;i++){
                row.append($('<td>').text(element[tableHeader[i].toLowerCase()]))
            }
            row.append($('<td>').text(element.constructor.name.replace('PunchStarter','')))
            row.append($('<td>').text(`${(element['_accumulatedMoney']/element['_tagetPrice'] * 100).toFixed(2)}%`))
            $('.punch-starter-table').append(row)
        }
        $('.wrapper main').empty()
        $('.wrapper main').append($(html))
    }
}

module.exports = ListModel;