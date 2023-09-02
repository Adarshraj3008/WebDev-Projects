function findHighestMarks() {
    const marks = [parseFloat(document.getElementById('marks1').value), parseFloat(document.getElementById('marks2').value),parseFloat(document.getElementById('marks3').value),parseFloat(document.getElementById('marks4').value), parseFloat(document.getElementById('marks5').value)];

    const highestMarks = marks.reduce((max, mark) => mark > max ? mark : max, -Infinity);

  document.getElementById('result').textContent = `Highest Marks: ${highestMarks}`;
}



