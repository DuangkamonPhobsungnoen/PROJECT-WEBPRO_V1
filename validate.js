var app = new Vue({
    el: '#vapp',
    data: {
        fname:'',
        lname:'',
        username:'',
        passw:'',
        passw2:'',
        phone:'',
        email:'',
        error:{
            fname:'',
            lname:'',
            username:'',
            passw:'',
            passw2:'',
            phone:'',
            email:'',
        }
    },
    methods: {
        tocheckout() {
            const myjson = JSON.stringify(res)
            localStorage.setItem("mycart", myjson)
        },
        validatefname(){
            if (this.fname === '') {
                this.error.fname = 'กรุณากรอกชื่อ'
                return
              }
              this.error.fname = ''
        },
        validatelname(){
            if (this.lname === '') {
                this.error.lname = 'กรุณากรอกนามสกุล'
                return
              }
              this.error.lname = ''
        },
        validateUsername(){
            if (this.username === '') {
                this.error.username = 'กรุณากรอกชื่อผู้ใช้'
                return
              }
              this.error.username = ''
        },
        validatePassw() {
            if (this.passw === '') {
              this.error.passw = 'กรุณากรอกรหัสผ่าน'
              return
            }
    
            if (this.passw.length < 6) {
              this.error.passw = 'รหัสผ่านห้ามน้อยกว่า 6 ตัวอักษร'
              return
            }     
            this.error.passw = ''
        },
        validatePassw2() {
            if (this.passw2 === '') {
            this.error.passw2 = 'กรุณากรอกยืนยันรหัสผ่าน'
            return
            }
    
            if (this.passw2 !== this.passw) {
            this.error.passw2 = 'รหัสผ่านไม่ตรงกัน'
            return
            }
    
            this.error.passw2 = ''
        },
        validateEmail(){
            if (this.email === '') {
                this.error.email = 'กรุณากรอกอีเมล'
                return
              }
              this.error.email = ''
        },
        validatePhone(){
            if (this.phone === '') {
                this.error.phone = 'กรุณากรอกหมายเลขโทรศัพท์'
                return
              }
            if (this.phone.length !== 10) {
            this.error.phone = 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง'
            return
            }
            this.error.phone = ''
        },
        submit(){
            this.validatefname()
            this.validatelname()
            this.validateUsername()
            this.validatePassw()
            this.validatePassw2()
            this.validateEmail()
            this.validatePhone()

            if (this.error.fname !== '' || this.error.lname !== '' ||  this.error.username !== '' || this.error.passw !== '' || this.error.passw2 !== '' || this.error.email !== '' || this.error.phone !== '') {
                alert ('กรุณากรอกข้อมูลให้ถูกต้อง')
                return
              }
            alert('ลงทะเบียนสำเร็จ')
            location.href = "./sign_in.html"
        }

    },
    
})