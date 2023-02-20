const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const db = require('/query');
const cors = require('cors');
const pool = require('./pool');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

// ---------------------------------------------------------------------------------- GET APIs--------------------------------------------------------------------------------------------------

// fetch all patients data api
app.get("/patients", async(req,res) => {
    try{
        const patients = await pool.query("select * from patients");
        res.json(patients.rows);
    }
    catch (err){
        console.log(err.message);
    }
});

//fetch all doctors data api
app.get("/doctors", async(req,res) => {
    try{
        const doctors = await pool.query("select * from doctors");
        res.json(doctors.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all nurses data api
app.get("/nurses", async(req,res) => {
    try{
        const nurses = await pool.query("select * from nurses");
        res.json(nurses.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular patient's data api
app.get("/patients/:id", async(req,res) => {
    const p_id = req.params.id;
    try{
        const p_data = await pool.query("select * from patients where patient_id = $1", [p_id]);
        res.json(p_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular doctor's data api
app.get("/doctors/:id", async(req,res) => {
    const doc_id = req.params.id;
    try{
        const doc_data = await pool.query("select * from doctors where doctor_id = $1", [doc_id]);
        res.json(doc_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular nurse's data api
app.get("/nurses/:id", async(req,res) => {
    const nurse_id = req.params.id;
    try{
        const nurse_data = await pool.query("select * from nurses where nurse_id = $1", [nurse_id]);
        res.json(nurse_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all the medicines data api
app.get("/medicines", async(req,res) => {
    try{
        const meds = await pool.query("select * from medicines");
        res.json(meds.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular medicine's data api
app.get("/medicines/:id", async(req,res) => {
    const med_id = req.params.id;
    try{
        const med_data = await pool.query("select * from medicines where med_id = $1", [med_id]);
        res.json(med_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all department's data api
app.get("/departments", async(req,res) => {
    try{
        const depts = await pool.query("select * from departments");
        res.json(depts.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular department's data api
app.get("/departments/:id", async(req,res) => {
    const dept_id = req.params.id;    
    try{
        const dept_data = await pool.query("select * from departments where dept_id = $1", [dept_id]);
        res.json(dept_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all the meals data api
app.get("/meals", async(req,res) => {
    try{
        const meals = await pool.query("select * from meals");
        res.json(meals.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular meal's data api
app.get("/meals/:id", async(req,res) => {
    const meal_id = req.params.id;
    try{
        const meal_data = await pool.query("select * from meals where meal_id = $1", [meal_id]);
        res.json(meal_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all the rooms data api
app.get("/rooms", async(req,res) =>{
    try{
        const rooms = await pool.query("select * from rooms");
        res.json(rooms.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular room's data api
app.get("/rooms/:id", async(req,res) => {
    const room_id = req.params.id;
    try{
        const room_data = await pool.query("select * from rooms where room_id = $1", [room_id]);
        res.json(room_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all categories data api
app.get("/categories", async(req,res) => {
    try{
        const categories = await pool.query("select * from categories");
        res.json(categories.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular category's data api
app.get("/categories/:id", async(req,res) => {
   const category_id = req.params.id;
   try{
    const category_data = await pool.query("select * from categories where c_id = $1", [category_id]);
    res.json(category_data.rows);
   } 
   catch(err){
    console.log(err.message);
   }
});

// fetch all employees data api
app.get("/employees", async(req,res) => {
    try{
        const employees = await pool.query("select * from employee");
        res.json(employees.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular employee's data api
app.get("/employees/:id", async(req,res) => {
    const e_id = req.params.id;
    try{
        const e_data = await pool.query("select * from employee where e_id = $1", [e_id]);
        res.json(e_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all staffs data api
app.get("/staffs", async(req,res) => {
    try{
        const staffs = await pool.query("select * from staffs");
        res.json(staffs.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular staff's data api
app.get("/staffs/:id", async(req,res) => {
    const staff_id = req.params.id;
    try{
        const staff_data = await pool.query("select * from staffs where staff_id = $1", [staff_id]);
        res.json(staff_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all chemists data api
app.get("/chemists", async(req,res) => {
    try{
        const chemists = await pool.query("select * from chemists");
        res.json(chemists.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular chemist's data api
app.get("/chemists/:id", async(req,res) => {
    const chem_id = req.params.id;
    try{
        const chem_data = await pool.query("select * from chemists where chem_id = $1", [chem_id]);
        res.json(chem_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all materials data api
app.get("/materials_and_devices", async(req,res) => {
    try{
        const materials = await pool.query("select * from materials_n_devices");
        res.json(materials.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular material's data api
app.get("/materials_and_devices/:id", async(req,res) => {
    const m_id = req.params.id;
    try{
        const material_data = await pool.query("select * from materials_n_devices where m_id = $1", [m_id]);
        res.json(material_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all the hospital's data api
app.get("/hospitals", async(req,res) => {
    try{
        const hospitals = await pool.query("select * from hospitals");
        res.json(hospitals.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular hospital's data api
app.get("/hospitals/:id", async(req,res) => {
    const h_id = req.params.id;
    try{
        const h_data = await pool.query("select * from hospitals where hospital_id = $1", [h_id]);
        res.json(h_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all users data api
app.get("/users", async(req,res) => {
    try{
        const users = await pool.query("select * from users");
        res.json(users.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular user's data
app.get("/users/:id", async(req,res) => {
    const u_id = req.params.id;
    try{
        const u_data = await pool.query("select * from users where user_id = $1", [u_id]);
        res.json(u_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all the vehicles data api
app.get("/vehicles", async(req,res) => {
    try{
        const vehicles = await pool.query("select * from vehicles");
        res.json(vehicles.rows); 
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular vehicle's data api
app.get("/vehicles/:id", async(req,res) => {
    const v_id = req.params.id;
    try{
        const v_data = await pool.query("select * from vehicles where vehicle_id = $1", [v_id]);
        res.json(v_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the doctors working in a particular department
app.get("/departments/doctors/:id", async(req,res) => {
    const dept_id = req.params.id;
    try{
        const docs_dept = await pool.query("select * from doctors inner join departments on doctors.dept_id = departments.dept_id where departments.dept_id = $1", [dept_id]);
        res.json(docs_dept.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the nurses working in a particular department
app.get("/departments/nurses/:id", async(req,res) => {
    const dept_id = req.params.id;
    try{
        const nurses_dept = await pool.query("select * from nurses inner join departments on nurses.dept_id = departments.dept_id where departments.dept_id = $1", [dept_id]);
        res.json(nurses_dept.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the employees working in a particular department
app.get("/departments/employees/:id", async(req,res) => {
    const dept_id = req.params.id;
    try{
        const emp_dept = await pool.query("select * from employee inner join departments on employee.dept_id = departments.dept_id where departments.dept_id = $1", [dept_id]);
        res.json(emp_dept.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get all the materials of a particular threat category
app.get("/materials_and_devices/categorical/:id", async(req,res) => {
    const c_id = req.params.id;
    try{
        const m_cat = await pool.query("select * from materials_n_devices inner join categories on materials_n_devices.c_id = categories.c_id where categories.c_id = $1", [c_id]);
        res.json(m_cat.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get all the treatment records api
app.get("/treatments", async(req,res) => {
    try{
        const treatments = await pool.query("select * from treatments");
        res.json(treatments.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular treatment's data api
app.get("/treatments/:id", async(req,res) => {
    const trt_id = req.params.id;
    try{
        const trt_data = await pool.query("select * from treatments where treatment_id = $1", [trt_id]);
        res.json(trt_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the doctor involved in a particular treatment
app.get("/treatments/:id/doctor", async(req,res) => {
    const trt_id = req.params.id;
    try{
        const doc_data = await pool.query("select * from doctors left join treatments on doctors.doctor_id = treatments.doctor_id where treatments.treatment_id = $1", [trt_id]);
        res.json(doc_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

//get the patient involved in a particular treatment
app.get("/treatments/:id/patient", async(req,res) => {
    const trt_id = req.params.id;
    try{
        const p_data = await pool.query("select * from patients left join treatments on patients.patient_id = treatments.patient_id where treatments.treatment_id = $1", [trt_id]);
        res.json(p_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

//get the nurse involved in a particular treatment
app.get("/treatments/:id/nurse", async(req,res) => {
    const trt_id = req.params.id;
    try{
        const n_data = await pool.query("select * from nurses left join treatments on nurses.nurse_id = treatments.nurse_id where treatments.treatment_id = $1", [trt_id]);
        res,json(n_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get all the tests records api
app.get("/tests", async(req,res) => {
    try{
        const tests = await pool.query("select * from tests");
        res.json(tests.rows);
    }
    catch(err){
        console.log(err);
    }
});

// get a particular test data api
app.get("/tests/:id", async(req,res) => {
    const t_id = req.params.id
    try{
        const t_data = await pool.query("select * from tests where test_id = $1", [t_id]);
        res.json(t_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the patient involved in a particular test
app.get("/tests/:id/patient", async(req,res) => {
    const t_id = req.params.id;
    try{
        const p_data = await pool.query("select * from patients left join tests on patients.patient_id = tests.patient_id where tests.test_id = $1", [t_id]);
        res.json(p_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the tests for a particular category
app.get("/tests/:id/category", async(req,res) => {
    const c_id = req.params.id;
    try{
        const tests = await pool.query("select * from tests left join categories on tests.c_id = categories.c_id where categories.c_id = $1", [c_id]);
        res.json(tests.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// fetch all the visitor's data api
app.get("/visitors", async(req,res) => {
    try{
        const visitors = await pool.query("select * from visitors");
        res.json(visitors.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get a particular visitor's data api
app.get("/visitors/:id", async(req,res) => {
    const visitor_id = req.params.id;
    try{
        const visitor_data = await pool.query("select * from visitors where visitor_id = $1", [visitor_id]);
        res.json(visitor_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the visitor data with patient_id
app.get("/patients/:id/visitors", async(req,res) => {
    const p_id = req.params.id;
    try{
        const vi_data = await pool.query("select * from visitors left join patients on visitors.patient_id = patients.patient_id where visitor_id = $1", [p_id]);
        res.json(vi_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
});

// get the room and patient details of a particular visitor assigned to
app.get("/visitors/:id/room_and_patient", async(req,res) => {
    const v_id = req.params.id;
    try{
        const pr_data = await pool.query("select * from rooms left join patients on rooms.patient_id = patients.patient_id left join visitors on patients.patient_id = visitors.patient_id where visitors.visitor_id = $1", [v_id]);
        res.json(pr_data.rows);
    }
    catch(err){
        console.log(err.message);
    }
}); 

// ---------------------------------------------------------------------------------- POST APIs--------------------------------------------------------------------------------------------------

// insert a new patient record api 
app.post("/patients/new_patient", async(req,res) => {
    try{
        const new_patient = req.body;
        await pool.query("insert into patients (patient_id, patient_name, category_name, category_id, payment_id, admitted, released, phone_no, email_id, address, gender, blood_grp, date_of_birth, patient_state) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",[
            new_patient.patient_id,
            new_patient.patient_name,
            new_patient.category_name,
            new_patient.category_id,
            new_patient.payment_id,
            new_patient.admitted,
            new_patient.released,
            new_patient.phone_no,
            new_patient.email_id,
            new_patient.address,
            new_patient.gender,
            new_patient.blood_grp,
            new_patient.date_of_birth,
            new_patient.patient_state,
        ])
        .then(() => {
            res.status(200).send('Successfully inserted')
        });
        
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new doctor record api
app.post("/doctors/new_doctor", async(req,res) => {
    try{
        const new_doctor = req.body;
        await pool.query("insert into doctors (doctor_id, doctor_name, dept_id, availabilty, phone_no, email_id, address, events, place) values($1,$2,$3,$4,$5,$6,$7,$8,$9)", [
            new_doctor.doctor_id,
            new_doctor.doctor_name,
            new_doctor.dept_id,
            new_doctor.availabilty,
            new_doctor.phone_no,
            new_doctor.email_id,
            new_doctor.address,
            new_doctor.events,
            new_doctor.place,
        ])
        .then(() => {
            res.status(200).send('Successfully inserted')
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new nurse record api
app.post("/nurses/new_nurse", async(req,res) => {
    try{
        const new_nurse = req.body;
        await pool.query("insert into nurses (nurse_id,nurse_name,dept_id,phone_no,email_id,address,place) values ($1,$2,$3,$4,$5,$6,$7)", [
            new_nurse.nurse_id,
            new_nurse.nurse_name,
            new_nurse.dept_id,
            new_nurse.phone_no,
            new_nurse.email_id,
            new_nurse.address,
            new_nurse.place,
        ])
        .then(() => {
            res.status(200).send('Successfully inserted')
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new employee record api
app.post("/employees/new_employee", async(req,res) => {
    try{
        const new_emp = req.body;
        await pool.query("insert into employee (e_id, e_name, e_dept, dept_id, phone_no, email_id, address, place) values ($1,$2,$3,$4,$5,$6,$7,$8)", [
            new_emp.e_id,
            new_emp.e_name,
            new_emp.e_dept,
            new_emp.dept_id,
            new_emp.phone_no,
            new_emp.email_id,
            new_emp.address,
            new_emp.place,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new staff record api
app.post("/staffs/new_staff", async(req,res) => {
    try{
        const new_staff = req.body;
        await pool.query("insert into staffs (staff_id, staff_name, staff_category, phone_no, email_id, address) values ($1,$2,$3,$4,$5,$6)", [
            new_staff.staff_id,
            new_staff.staff_name,
            new_staff.staff_category,
            new_staff.phone_no,
            new_staff.email_id,
            new_staff.address,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new chemist record api
app.post("/chemists/new_chemist", async(req,res) => {
    try{
        const new_chem = req.body;
        await pool.query("insert into chemists (chem_id, chem_name, med_category, c_id, phone_no, email_id, address) values ($1,$2,$3,$4,$5,$6,$7)", [
            new_chem.chem_id,
            new_chem.chem_name,
            new_chem.med_category,
            new_chem.c_id,
            new_chem.phone_no,
            new_chem.email_id,
            new_chem.address,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new department record api
app.post("/departments/new_dept", async(req,res) => {
    try{
        const new_dept = req.body;
        await pool.query("insert into departments (dept_id, dept_name, c_id) values ($1,$2,$3)", [
            new_dept.dept_id,
            new_dept.dept_name,
            new_dept.c_id,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new user record api
app.post("/users/new_user", async(req,res) => {
    try{
        const new_user = req.body;
        await pool.query("insert into users (user_id, user_name, user_role, phone_no, email_id, address, u_password) values($1,$2,$3,$4,$5,$6,$7)", [
            new_user.user_id,
            new_user.user_name,
            new_user.user_role,
            new_user.phone_no,
            new_user.email_id,
            new_user.address,
            new_user.u_password,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new category record api
app.post("/categories/new_category", async(req,res) => {
    try{
        const new_cat = req.body;
        await pool.query("insert into categories (c_id, c_name, c_desc, c_procedure, dept_id) values($1,$2,$3,$4,$5)", [
            new_cat.c_id,
            new_cat.c_name,
            new_cat.c_desc,
            new_cat.c_procedure,
            new_cat.dept_id,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new vehicle record api
app.post("/vehicles/new_vehicle", async(req,res) => {
    try{
        const new_vehi = req.body;
        await pool.query("insert into vehicles (vehicle_id, vehicle_type, vehicle_name, availability, hospital_id) values ($1,$2,$3,$4,$5)", [
            new_vehi.vehicle_id,
            new_vehi.vehicle_type,
            new_vehi.vehicle_name,
            new_vehi.availability,
            new_vehi.hospital_id,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new medicine record api
app.post("/medicines/new_med", async(req,res) => {
    try{
        const new_med = req.body;
        await pool.query("insert into medicines (med_id, med_name, med_cost, availability, stock_amount, c_id) values ($1,$2,$3,$4,$5,$6)", [
            new_med.med_id,
            new_med.med_name,
            new_med.med_cost,
            new_med.availability,
            new_med.stock_amount,
            new_med.c_id,
        ]) 
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new material record api
app.post("/materials_and_devices/new_material", async(req, res) => {
    try{
        const new_mat = req.body;
        await pool.query("insert into materials_n_devices (m_id, m_name, m_cost, availability, stock, c_id) values($1,$2,$3,$4,$5,$6)", [
            new_mat.m_id,
            new_mat.m_name,
            new_mat.m_cost,
            new_mat.availabilty,
            new_mat.stock,
            new_mat.c_id,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new hospital record api
app.post("/hospitals/new_hospital", async(req,res) => {
    try{
        const new_hos = req.body;
        await pool.query("insert into hospitals (hospital_id, hospital_name, phone_no., email_id, address, hospital_desc) values($1,$2,$3,$,$5,$6)", [
            new_hos.hospital_id,
            new_hos.hospital_name,
            new_hos.phone_no,
            new_hos.email_id,
            new_hos.address,
            new_hos.hospital_desc,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new room record api
app.post("/rooms/new_room", async(req,res) => {
    try{
        const new_room = req.body;
        await pool.query("insert into rooms (room_id, room_name, c_id, dept_id, patient_id) values($1,$2,$3,$4,$5)", [
            new_room.room_id,
            new_room.room_name,
            new_room.c_id,
            new_room.dept_id,
            new_room.patient_id,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new meal record api
app.post("/meals/new_meal", async(req,res) => {
    try{
        const new_meal = req.body;
        await pool.query("insert into meals (meal_id, meal_name, meal_cost, c_id, availability) values($1,$2,$3,$4,$5)", [
            new_meal.meal_id,
            new_meal.meal_name,
            new_meal.meal_cost,
            new_meal.c_id,
            new_meal.availability,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new treatment record api
app.post("/treatments/new_treatment", async(req,res) => {
    try{
        const new_trt = req.body;
        await pool.query("insert into treatments (treatment_id, patient_id, doctor_id, nurse_id, materials_used, date_of, result_, c_id) values ($1,$2,$3,$4,$5,$6,$7,$8)", [
            new_trt.treatment_id,
            new_trt.patient_id,
            new_trt.doctor_id,
            new_trt.nurse_id,
            new_trt.materials_used,
            new_trt.date_of,
            new_trt.result_,
            new_trt.c_id,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new bill record api
app.post("/billings/new_bill", async(req,res) => {
    try{
        const new_bill = req.body;
        await pool.query("insert into billings (payment_id, patient_id, patient_name, room_id, med_id, c_id, admitted, released, treatment_id, meal_id, total_amount) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)", [
            new_bill.payment_id,
            new_bill.patient_id,
            new_bill.patient_name,
            new_bill.room_id,
            new_bill.med_id,
            new_bill.c_id,
            new_bill.admitted,
            new_bill.released,
            new_bill.treatment_id,
            new_bill.meal_id,
            new_bill.total_amount,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new test record api
app.post("/tests/new_test", async(req,res) => {
    try{
        const new_test = req.body;
        await pool.query("insert into tests (test_id, test_name, test_desc, c_id, patient_id, doctor_id, result_) values ($1,$2,$3,$4,$5,$6,$7)", [
            new_test.test_id,
            new_test.test_name,
            new_test.test_desc,
            new_test.c_id,
            new_test.patient_id,
            new_test.doctor_id,
            new_test.result_,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// insert a new visitor record api
app.post("/visitors/new_visitor", async(req,res) => {
    try{
        const new_vis = req.body;
        await pool.query("insert into visitors (visitor_id, visitor_name, patient_name, patient_id, phone_no, email_id, address) values($1,$2,$3,$4,$5,$6,$7)", [
            new_vis.visitor_id,
            new_vis.visitor_name,
            new_vis.patient_name,
            new_vis.patient_id,
            new_vis.phone_no,
            new_vis.email_id,
            new_vis.address,
        ])
        .then(() => {
            res.status(200).send("Successfully inserted")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// ---------------------------------------------------------------------------------- PUT APIs--------------------------------------------------------------------------------------------------

// update a meal record api
app.put("/meals/:id/meal_update", async(req,res) => {
    const meal_id = req.params.id;
    try {
        const meal_data = req.body;
        await pool.query("update meals set meal_name = $1, meal_cost = $2, c_id = $3, availability = $4 where meal_id = $5 ", [
            meal_data.meal_name,
            meal_data.meal_cost,
            meal_data.c_id,
            meal_data.availability,
            meal_id,
        ])
        .then(() => {
            res.status(201).send("Updated meal")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a patient record api
app.put("/patients/:id/patient_update", async(req,res) => {
    const p_id = req.params.id;
    try{
        const p_data = req.body;
        await pool.query("update patients set patient_name = $1, category_name = $2, category_id = $3, payment_id = $4, admitted = $5, released = $6, phone_no = $7, email_id = $8, address = $9, gender = $10, blood_grp = $11, date_of_birth = $12, patient_state = $13 where patient_id = $14", [
            p_data.patient_name,
            p_data.category_name,
            p_data.category_id,
            p_data.payment_id,
            p_data.admitted,
            p_data.released,
            p_data.phone_no,
            p_data.email_id,
            p_data.address,
            p_data.gender,
            p_data.blood_grp,
            p_data.date_of_birth,
            p_data.patient_state,
            p_id,
        ])
        .then(() => {
            res.status(201).send("Updated patient")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a doctor record api
app.put("/doctors/:id/doctor_update", async(req, res) => {
    const doc_id = req.params.id;
    try{
        const doc_data = req.body;
        await pool.query("update doctors set doctor_name = $1, dept_id = $2, availability = $3, phone_no = $4, email_id = $5, address = $6, events = $7, place = $8 where doctor_id = $9", [
            doc_data.doctor_name,
            doc_data.dept_id,
            doc_data.availability,
            doc_data.phone_no,
            doc_data.email_id,
            doc_data.address,
            doc_data.events,
            doc_data.place,
            doc_id,
        ])
        .then(() => {
            res.status(201).send("Updated doctor")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update an employee record api
app.put("/employees/:id/employee_update", async(req,res) => {
    const emp_id = req.params.id;
    try{
        const emp_data = req.body;
        await pool.query("update employee set e_name = $1, e_dept = $2, dept_id = $3, phone_no = $4, email_id = $5, address = $6, place = $7 where e_id = $8", [
            emp_data.e_name,
            emp_data.e_dept,
            emp_data.dept_id,
            emp_data.phone_no,
            emp_data.email_id,
            emp_data.address,
            emp_data.place,
            emp_id,
        ])
        .then(() => {
            res.status(201).send("Updated employee")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a nurse record api
app.put("/nurses/:id/nurse_update", async(req,res) => {
    const nur_id = req.params.id;
    try{
        const nurse_data = req.body;
        await pool.query("update nurses set nurse_name = $1, dept_id = $2, phone_no = $3, email_id = $4, address = $5, place = $6 where nurse_id = $7", [
            nurse_data.nurse_name,
            nurse_data.dept_id,
            nurse_data.phone_no,
            nurse_data.email_id,
            nurse_data.address,
            nurse_data.place,
            nur_id,
        ])
        .then(() => {
            res.status(201).send("Updated nurse")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a staff record api
app.put("/staffs/:id/staff_update", async(req,res) => {
    const s_id = req.params.id;
    try{
        const s_data = req.body;
        await pool.query("update staffs set staff_name = $1, staff_category = $2, phone_no = $3, email_id = $4, address = $5 where staff_id = $6", [
            s_data.staff_name,
            s_data.staff_category,
            s_data.phone_no,
            s_data.email_id,
            s_data.address,
            s_id,
        ])
        .then(() => {
            res.status(201).send("Updated staff")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a chemist record api
app.put("/chemists/:id/chemist_update", async(req,res) => {
    const che_id = req.params.id;
    try{
        const che_data = req.body;
        await pool.query("update chemists set chem_name = $1, med_category = $2, c_id = $3, phone_no = $4, email_id = $5, address = $6 where chem_id = $7", [
            che_data.chem_name,
            che_data.med_category,
            che_data.c_id,
            che_data.phone_no,
            che_data.email_id,
            che_data.address,
            che_id,
        ])
        .then(() => {
            res.status(201).send("Updated chemist")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a medicine record api
app.put("/medicines/:id/medicine_update", async(req,res) => {
    const mede_id = req.params.id;
    try{
        const mede_data = req.body;
        await pool.query("update medicines set med_name = $1, med_cost = $2, availability = $3, stock_amount = $4, c_id = $5 where med_id = $6", [
            mede_data.med_name,
            mede_data.med_cost,
            mede_data.availability,
            mede_data.stock_amount,
            mede_data.c_id,
            mede_id,
        ])
        .then(() => {
            res.status(201).send("Updated medicine")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a category record api
app.put("/categories/:id/category_update", async(req,res) => {
    const cat_id = req.params.id;
    try{
        const cat_data = req.body;
        await pool.query("update categories set c_name = $1, c_desc = $2, c_procedure = $3, dept_id = $4 where c_id = $5", [
            cat_data.c_name,
            cat_data.c_desc,
            cat_data.c_procedure,
            cat_data.dept_id,
            cat_id,
        ])
        .then(() => {
            res.status(201).send("Updated category")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a room record api
app.put("/rooms/:id/room_update", async(req,res) => {
    const r_id = req.params.id;
    try{
        const r_data = req.body;
        await pool.query("update rooms set room_name = $1, c_id = $2, dept_id = $3, patient_id = $4 where room_id = $5", [
            r_data.room_name,
            r_data.c_id,
            r_data.dept_id,
            r_data.patient_id,
            r_id,
        ])
        .then(() => {
            res.status(201).send("Updated room")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update an user record api
app.put("/users/:id/user_update", async(req,res) => {
    const us_id = req.params.id;
    try{
        const us_data = req.body;
        await pool.query("update users set user_name = $1, user_role = $2, phone_no = $3, email_id = $4, address = $5, u_password = $6 where user_id = $7", [
            us_data.user_name,
            us_data.user_role,
            us_data.phone_no,
            us_data.email_id,
            us_data.address,
            us_data.u_password,
            us_id,
        ])
        .then(() => {
            res.status(201).send("Updated user")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a department record api
app.put("/departments/:id/department_update", async(req,res) => {
    const de_id = req.params.id;
    try{
        const de_data = req.body;
        await pool.query("update departments set dept_name = $1, c_id = $2 where dept_id = $3", [
            de_data.dept_name,
            de_data.c_id,
            de_id,
        ])
        .then(() => {
            res.status(201).send("Updated department")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a hospital record api
app.put("/hospitals/:id/hospital_update", async(req,res) => {
    const hos_id = req.params.id;
    try{
        const hos_data = req.body;
        await pool.query("update hospitals set hospital_name = $1, phone_no = $2, email_id = $3, address = $4, hospital_desc = $5 where hospital_id = $6", [
            hos_data.hospital_name,
            hos_data.phone_no,
            hos_data.email_id,
            hos_data.address,
            hos_data.hospital_desc,
            hos_id,
        ])
        .then(() => {
            res.status(201).send("Updated hospital")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a treatment record api
app.put("/treatments/:id/treatment_update", async(req,res) => {
    const trt_id = req.params.id;
    try{
        const trt_data = req.body;
        await pool.query("update treatments set doctor_id = $1, nurse_id = $2, materials_used = $3, date_of = $4, result_ = $5, c_id = $6 where treatment_id = $7", [
            trt_data.doctor_id,
            trt_data.nurse_id,
            trt_data.materials_used,
            trt_data.date_of,
            trt_data.result_,
            trt_data.c_id,
            trt_id,
        ])
        .then(() => {
            res.status(201).send("Updated treatment")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a billing record api
app.put("/billings/:id/bill_update", async(req,res) => {
    const bill_id = req.params.id;
    try{
        const bill_data = req.body;
        await pool.query("update billings set patient_name = $1, room_id = $2, med_id = $3, c_id = $4, admitted = $5, released = $6, treatment_id = $7, meal_id = $8, total_amount = $9 where payment_id = $10", [
            bill_data.patient_name,
            bill_data.room_id,
            bill_data.med_id,
            bill_data.c_id,
            bill_data.admitted,
            bill_data.released,
            bill_data.treatment_id,
            bill_data.meal_id,
            bill_data.total_amount,
            bill_id,
        ])
        .then(() => {
            res.status(201).send("Updated billing")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a test record api
app.put("/tests/:id/test_update", async(req,res) => {
    const t_id = req.params.id;
    try{
        const t_data = req.body;
        await pool.query("update tests set test_name = $1, test_desc = $2, c_id = $3, doctor_id = $4, result_ = $5 where test_id = $6", [
            t_data.test_name,
            t_data.test_desc,
            t_data.c_id, 
            t_data.doctor_id,
            t_data.result_,
            t_id,
        ])
        .then(() => {
            res.status(201).send("Updated test")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a vehicle record api
app.put("/vehicles/:id/vehicle_update", async(req,res) => {
    const v_id = req.params.id;
    try{
        const v_data = req.body;
        await pool.query("update vehicles set vehicle_type = $1, vehicle_name = $2, availability = $3, hospital_id = $4 where vehicle_id = $5", [
            v_data.vehicle_type,
            v_data.vehicle_name,
            v_data.availability,
            v_data.hospital_id,
            v_id,
        ])
        .then(() => {
            res.status(201).send("Updated vehicle")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// update a visitor's record api
app.put("/visitors/:id/visitor_update", async(req,res) => {
    const vi_id = req.params.id;
    try{
        const vi_data = req.body;
        await pool.query("update visitors set visitor_name = $1, patient_name = $2, patient_id = $3, phone_no = $4, email_id = $5, address = $6 where visitor_id = $7", [
            vi_data.visitor_name,
            vi_data.patient_name,
            vi_data.patient_id,
            vi_data.phone_no,
            vi_data.email_id,
            vi_data.address,
            vi_id,
        ])
        .then(() => {
            res.status(201).send("Updated visitor")
        });
    }
    catch(err){
        console.log(err.message);
    }
});

// ---------------------------------------------------------------------------------- DELETE APIs--------------------------------------------------------------------------------------------------

//delete a particular record from patients
app.delete("/patients/:id/patient_delete", async(req,res) => {
    const p_del_id = req.params.id;
    try{
        await pool.query("delete from patients where patients.patient_id = $1", [p_del_id]);
        res.status(204).send("Removed record");
    }
    catch(err){
        console.log(err.message);
    }
});

//delete a particular record from doctors
