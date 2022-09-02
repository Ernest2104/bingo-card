const createMatrix = () => {
  // Arreglo con un subarreglo para cada columna de la tarjeta
  let matrix = [
      [], // (1-9)
      [], // (10-19)
      [], // (20-29)
      [], // (30-39)
      [], // (40-49)
      [], // (50-59)
      [], // (60-69)
      [], // (70-79)
      []  // (80-89)
  ];
  // Llenar cada subarreglo
  for (let i = 0; i < matrix.length; i++) {
      // Asignar máximo y mínimo de cada columna
      let min, max
      if (i === 0) {
        min = 1
        max = 9
      } else 
      if (i === 8) {
        min = 80
        max = 90
      } else {
        min = Number((i + 1) + '0') - 10;
        max = min + 9;
      }
      console.log(min, max)
      // Llenar cada subarreglo con 3 elementos
      while(matrix[i].length < 3) {
          let num = Math.floor(Math.random() * (max - min)) + min;
          // Evitar números repetidos en cada columna
          if(!matrix[i].includes(num)) {
              matrix[i].push(num);
          }
      }
      // Ordenar las columnas
      matrix[i].sort((a,b) => a - b);
  }
  return matrix;
}

let card = createMatrix()
let html = '';
html +=`
  <table>
    <thead>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
      </tr>
    </thead>
    <tbody>`;
      for(let i = 0; i < 3; i++) {
        html += `
          <tr>
            <td>${card[0][i]}</td>
            <td>${card[1][i]}</td>
            <td>${card[2][i]}</td>
            <td>${card[3][i]}</td>
            <td>${card[4][i]}</td>
            <td>${card[5][i]}</td>
            <td>${card[6][i]}</td>
            <td>${card[7][i]}</td>
            <td>${card[8][i]}</td>
          </tr>`
      }
  html += '</tbody></table>';
document.getElementById('card').innerHTML = html;
