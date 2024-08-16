document.addEventListener('DOMContentLoaded', () => {
    const subjects = [
        { code: '21IT6202', name: 'Information Security', maxMark: 100 },
        { code: '21IT6203', name: 'Embedded Systems', maxMark: 100 },
        { code: '21IT6204', name: 'Database management and security', maxMark: 100 },
        { code: '21IT6205', name: 'Basics of Java', maxMark: 100 },
        { code: '21IT6001', name: 'Software systems', maxMark: 100 },
        { code: '21IT6005', name: 'Python lab', maxMark: 100 },
        { code: '21IT6003', name: 'Java lab', maxMark: 100 },
        { code: '21IT6004', name: 'C programming lab', maxMark: 100 }
    ];

    const getMarks = (subject) => {
        const theory = parseInt(prompt(`Enter Theory marks for ${subject.name}`), 10);
        const practical = parseInt(prompt(`Enter Practical marks for ${subject.name}`), 10);
        return { theory, practical };
    };

    const toWords = (num) => {
        const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        const thousands = ["", "Thousand"];

        if (num === 0) return "Zero";

        let word = '';
        let unit = Math.floor(num / 1000);
        let rem = num % 1000;

        if (unit > 0) {
            word += units[unit] + " Thousand ";
        }

        unit = Math.floor(rem / 100);
        rem = rem % 100;

        if (unit > 0) {
            word += units[unit] + " Hundred ";
        }

        if (rem > 0) {
            if (rem < 10) {
                word += units[rem];
            } else if (rem < 20) {
                word += teens[rem - 10];
            } else {
                unit = Math.floor(rem / 10);
                rem = rem % 10;
                word += tens[unit] + (rem > 0 ? " " + units[rem] : "");
            }
        }

        return word.trim();
    };

    let grandTotal = 0;
    let totalMarks = [];
    let percentage, result, grade;

    subjects.forEach((subject, index) => {
        const { theory, practical } = getMarks(subject);
        const total = theory + practical;
        totalMarks.push(total);

        document.getElementById(`theory${index + 1}`).textContent = theory;
        document.getElementById(`practical${index + 1}`).textContent = practical;
        document.getElementById(`total${index + 1}`).textContent = total;
        document.getElementById(`totalinwords${index + 1}`).textContent = toWords(total);

        grandTotal += total;
    });

    percentage = (grandTotal / (subjects.length * 100)) * 100;  
    grade = percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : percentage >= 50 ? 'D' : 'F';
    result = percentage >= 50 ? 'Pass' : 'Fail';

    document.getElementById('grand_total').textContent = `Grand total : ${grandTotal}`;
    document.getElementById('grand_total_in_words').textContent = `in words : ${toWords(grandTotal)}`;
    document.getElementById('percentage').textContent = `${percentage.toFixed(2)}%`;
    document.getElementById('result').textContent = result;
    document.getElementById('grade').textContent = `Grade : ${grade}`;  
});

