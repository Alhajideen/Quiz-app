//STUDENT REGISTRATION/LOGIN VARIABLES
let register_student = document.getElementById('register-student')
let student_login = document.getElementById('student_login')
let student_name = document.getElementById('student-name')
let student_gender = document.getElementById('gender')
let student_age = document.getElementById('student-age')
let student_school = document.getElementById('student-school')
let student_email = document.getElementById('student-email')
let student_password = document.getElementById('password')

let login_email = document.getElementById('login_email')
let login_password = document.getElementById('login_password')

//SCHOOL REGISTRATION VARIABLES
let school_name = document.getElementById('school_name')
let school_address = document.getElementById('school_address')
let school_email = document.getElementById('school_email')
let register_school = document.getElementById('register_school')

class Candidate {
    constructor(a, b, c, d, e, f) {
        this.student_name = a,
            this.student_gender = b,
            this.student_age = c,
            this.student_school = d
        this.student_email = e
        this.student_password = f
    }

    takeQuiz() {
        location.href = 'quiz.html'
    }
    getPoint() {
        console.log(this.student_name + " has no points yet");
    }
}
class School {
    constructor(a, b, c) {
        this.school_name = a,
            this.school_address = b,
            this.school_email = c
    }
}
register_student.onclick = (e) => {
    e.preventDefault()
    let candidate = new Candidate(
        student_name.value,
        student_gender.value, student_age.value,
        student_school.value, student_email.value,
        student_password.value
    )
    //Check candidate details against database for existing email and reject a second attempt to use same
    let currentStudents;
    fetch('http://localhost:4000/students').then((resp) => resp.json()).then((data) => {
        currentStudents = data.filter(({ student_email }) => candidate.student_email === student_email)

        if (!currentStudents[0]) {
            fetch('http://localhost:4000/students', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(candidate)
            })
            alert(student_name.value + " has been registered successfully")
        } else {
            alert('A student with this email already exists, kindly use another email to register')

        }
        // currentStudents.forEach(({ student_email, student_password }) => {
        //     if (candidate.student_email === student_email) {
        //     } else {
        //         fetch('http://localhost:4000/students', {
        //             method: 'post',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify(candidate)
        //         })
        //         alert(student_name.value + " has been registered successfully")

        //     }
        // })

    }).catch((error) => {
        console.log(error);
    })



}

register_school.onclick = (e) => {
    e.preventDefault()
    let school = new School(
        school_name.value,
        school_address.value,
        school_email.value,
    )
    console.log(school);
    fetch('http://localhost:4000/schools', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(school)
    }).then(() => {
        alert(school_name.value + " has been registered successfully")
    })
}

const getStudents = async () => {
    const rawStudents = await fetch('http://localhost:4000/students')
    const data = await rawStudents.json()
    let loggedInStudent;
    /*
    data.forEach((main_data) => {


        loggedInStudent=main_data
            if (login_email.value === loggedInStudent.student_email && login_password.value === loggedInStudent.student_password) {
        loggedInStudent = main_data
        alert('Hello, ' + loggedInStudent.student_name + ' welcome to your quiz page. Click okay to continue')

        new Candidate(
            loggedInStudent.student_name,
            loggedInStudent.student_school,
            loggedInStudent.student_email,
            loggedInStudent.student_school
        ).takeQuiz()
        

    } else {
        getSchools()
        // alert('wrong email orlfvldf')
        console.log('wrong');
    }

    })
*/

    const studentA = data.filter(({ student_email, student_password }) => login_email.value === student_email && login_password.value === student_password)
    if (studentA[0]) {
        loggedInStudent = studentA[0]
        alert('Hello, ' + loggedInStudent.student_name + ' welcome to your quiz page. Click okay to continue')
    } else {
        alert('Wrong email address or password')
    }



}
const getSchools = async () => {
    try {
        const rawSchools = await fetch('http://localhost:4000/schools')
        const data = await rawSchools.json()

        function populateSchools() {
            let option = '';
            for (let i = 0; i < data.length; i++) {
                option += `<option value=${i}>${data[i].school_name}</option>`
            }
            return option
        }
        student_school.innerHTML = populateSchools(data)
    } catch (error) {
        console.log(error)
    }
}
getSchools()

student_login.onclick = (e) => {
    e.preventDefault()
    getStudents()
}


