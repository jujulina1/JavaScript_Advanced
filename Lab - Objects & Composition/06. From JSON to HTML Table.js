function solve(text) {

    let arr = JSON.parse(text);// return array with 2 elements with two objects
    // 0:{Name: 'Stamat', Score: 5.5}
      // 1:{Name: 'Rumen', Score: 6}

    let output = ["<table>"]; //the FINAL RESULT


    let property = Object.keys(arr[0]);//array with two elemnts [Name], [Score] 
    output.push(makeKeyRow(property)); //result = `<tr><th>Name</th><th>Score</th></tr>`;

    //console.log(result);

    for (const element of arr) {
        let values = Object.values(element);//array [Stamat, 5.5]
        output.push(makeValueRow(values));
    }


    output.push("</table>");

    console.log(output.join('\n'));



    function makeKeyRow(array) {
        
        let outputArr = [];
        outputArr.push('   <tr>');
        
       
        for (const key of array) {

            outputArr.push('<th>');

            outputArr.push(escapeFunc(key));

            outputArr.push('</th>');

        }
        //let output = `<tr><th>Name</th><th>Score</th></tr>`;
        outputArr.push('</tr>');

        return outputArr.join('');
    }	




    function makeValueRow(array) {

        let outputArr = ['   <tr>'];

        for (const value of array) {

            outputArr.push('<td>');

            outputArr.push(escapeFunc(value));

            outputArr.push('</td>');

        }
        //<tr><td>Stamat</td><td>5.5</td></tr>//
        outputArr.push('</tr>');

        return outputArr.join('');
    }



    function escapeFunc(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

   

 
 
}
solve(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`);

solve(`[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]`);