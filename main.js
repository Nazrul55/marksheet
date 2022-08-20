function show_result(){

    //bangla 1st paper

    let ban_1st_mcq = document.querySelector("#ban-1st-mcq");
    let ban_1st_cq = document.querySelector("#ban-1st-cq");
    let ban_1st_mcq_num = parseInt(ban_1st_mcq.value);
    let ban_1st_cq_num = parseInt(ban_1st_cq.value);
    let ban_1st_total = ban_1st_mcq_num + ban_1st_cq_num;

    //bangla 2nd paper

    let ban_2nd_mcq = document.querySelector("#ban-2nd-mcq");
    let ban_2nd_cq = document.querySelector("#ban-2nd-cq");
    let ban_2nd_mcq_num = parseInt(ban_2nd_mcq.value);
    let ban_2nd_cq_num = parseInt(ban_2nd_cq.value);
    let ban_2nd_total = ban_2nd_mcq_num + ban_2nd_cq_num;

    //english 1st paper

    let eng_1st = document.querySelector("#eng-1st");
    let eng_1st_num = parseInt(eng_1st.value);

    //english 2nd paper
     
    let eng_2nd = document.querySelector("#eng-2nd");
    let eng_2nd_num = parseInt(eng_2nd.value);


    //mathmatices 

    let math_mcq = document.querySelector("#math-mcq");
    let math_cq = document.querySelector("#math-cq");
    let math_mcq_num = parseInt(math_mcq.value);
    let math_cq_num = parseInt(math_cq.value);
    let math_total = math_mcq_num + math_cq_num;

    //religion

    let religion_mcq = document.querySelector("#religion-mcq");
    let religion_cq = document.querySelector("#religion-cq");
    let religion_mcq_num = parseInt(math_mcq.value);
    let religion_cq_num = parseInt(math_cq.value);
    let religion_total = religion_mcq_num + religion_cq_num;

    //ICT

    let ict_mcq = document.querySelector("#ict-mcq");
    let ict_cq = document.querySelector("#ict-cq");
    let ict_mcq_num = parseInt(ict_mcq.value);
    let ict_cq_num = parseInt(ict_cq.value); 
    let ict_total = ict_mcq_num + ict_cq_num; 

    //physics

    let physics_mcq = document.querySelector("#phys-mcq");
    let physics_cq = document.querySelector("#phys-cq");
    let physics_mcq_num = parseInt(physics_mcq.value);
    let physics_cq_num = parseInt(physics_cq.value);
    let physics_total = physics_mcq_num + physics_cq_num;

    //chemistry

    let chemistry_mcq = document.querySelector("#chem-mcq");
    let chemistry_cq = document.querySelector("#chem-cq");
    let chemistry_mcq_num = parseInt(chemistry_mcq.value);
    let chemistry_cq_num = parseInt(chemistry_cq.value);
    let chemistry_total = chemistry_mcq_num + chemistry_cq_num;


    //biology

    let biology_mcq = document.querySelector("#bio-mcq");
    let biology_cq = document.querySelector("#bio-cq");
    let biology_mcq_num = parseInt(biology_mcq.value);
    let biology_cq_num = parseInt(biology_cq.value);
    let biology_total = biology_mcq_num + biology_cq_num;


    //higher-mathmatices

    let higher_math_mcq = document.querySelector("#higher-math-mcq");
    let higher_math_cq = document.querySelector("#higher-math-cq");
    let higher_math_mcq_num = parseInt(higher_math_mcq.value);
    let higher_math_cq_num = parseInt(higher_math_cq.value);
    let higher_math_total = higher_math_mcq_num + higher_math_cq_num;

    //bangladesh and global studies

    let b_g_s_mcq = document.querySelector("#B-G-S-mcq");
    let b_g_s_cq = document.querySelector("#B-G-S-cq");
    let b_g_s_mcq_num = parseInt(b_g_s_mcq.value);
    let b_g_s_cq_num = parseInt(b_g_s_cq.value);
    let b_g_s_total = b_g_s_mcq_num + b_g_s_cq_num; 


    // total area

    let total_marks =(ban_1st_total + ban_2nd_total + eng_1st_num + eng_2nd_num + math_total + religion_total + ict_total + physics_total + chemistry_total + biology_total + higher_math_total + b_g_s_total);

    let total_num_show = document.querySelector(".total");
    total_num_show.innerHTML = total_marks;

       
    //point area

    function get_grade_point(total_number){
        if(total_number >= 80 && total_number < 100) {
            return 5.00
        }
        else if(total_number >= 70  && total_number < 79) {
            return 4.00
    
        }
        else if(total_number >= 60  && total_number < 69) {
            return 3.50
    
        }
        else if(total_number >= 50  && total_number < 59) {
            return 3.00
    
        }
        else if(total_number >= 40  && total_number < 49) {
            return 2.00
    
        }
        else if(total_number >= 33  && total_number < 39) {
            return 1.00
    
        }
        else {
            return 0.00
        }
    
    }

     //bangla 1st total grade point
    
    let total_grade_point_ban1st = get_grade_point(ban_1st_total);
    let ban_1st_point = document.querySelector("#ban-1st-point");
    ban_1st_point.value = total_grade_point_ban1st;

    //bangla 2nd total grade point

    let total_grade_point_ban2nd = get_grade_point(ban_2nd_total);
    let ban_2nd_point = document.querySelector("#ban-2nd-point");
    ban_2nd_point.value = total_grade_point_ban2nd;

    //english 1st total grade point

    let total_grade_point_eng1st = get_grade_point(eng_1st_num);
    let eng_1st_point = document.querySelector("#eng-1st-point");
    eng_1st_point.value = total_grade_point_eng1st;

    //english 2nd total grade point

    
    let total_grade_point_eng2nd = get_grade_point(eng_2nd_num);
    let eng_2nd_point = document.querySelector("#eng-2nd-point");
    eng_2nd_point.value = total_grade_point_eng2nd;

    //mathmatices total grade point

    let total_grade_point_math = get_grade_point(math_total);
    let math_point = document.querySelector("#math-point");
    math_point.value = total_grade_point_math;

    //religion total grade point

    let total_grade_point_religion = get_grade_point(religion_total);
    let religion_point = document.querySelector("#religion-point");
    religion_point.value = total_grade_point_religion;

    //ict total grade point

    let total_grade_point_ict = get_grade_point(ict_total);
    let ict_point = document.querySelector("#ict-point");
    ict_point.value = total_grade_point_ict;

    //physics total grade point

    let total_grade_point_physics = get_grade_point(physics_total);
    let physics_point = document.querySelector("#phys-point");
    physics_point.value = total_grade_point_physics;

    //chemistry total grade point

    let total_grade_point_chemistry = get_grade_point(chemistry_total);
    let chemistry_point = document.querySelector("#chem-point");
    chemistry_point.value = total_grade_point_chemistry;

    //biology total grade point

    let total_grade_point_biology = get_grade_point(biology_total);
    let biology_point = document.querySelector("#bio-point");
    biology_point.value = total_grade_point_biology;

    //higher-mathmatices total grade point

    let total_grade_point_higher_math = get_grade_point(higher_math_total);
    let higher_math_point = document.querySelector("#higher-math-point");
    higher_math_point.value = total_grade_point_higher_math;

    //bangladesh and global studies total grade point

    let total_grade_point_b_g_s = get_grade_point(b_g_s_total);
    let b_g_s_point = document.querySelector("#B-G-S-point");
    b_g_s_point.value = total_grade_point_b_g_s;

    //Grade area

    function get_grade(total_number){
        if(total_number >= 80 && total_number < 100) {
           return "A+"
        }
        else if(total_number >= 70  && total_number <= 79) {
            return "A"
    
        }
        else if(total_number >= 60  && total_number <= 69) {
            return "A-"
    
        }
        else if(total_number >= 50  && total_number <= 59) {
            return "B"
    
        }
        else if(total_number >= 40  && total_number <= 49) {
            return "C"
    
        }
        else if(total_number >= 33  && total_number <= 39) {
            return "D"
    
        }
        else {
            return "Fail"
        }
    
    }


    //bangla 1st total grade
    let total_grade_ban1st = get_grade(ban_1st_total);
    let ban_1st_grade = document.querySelector("#ban-1st-grade");
    ban_1st_grade.value = total_grade_ban1st;

    //bangla 2nd total grade point

    let total_grade_ban2nd = get_grade(ban_2nd_total);
    let ban_2nd_grade = document.querySelector("#ban-2nd-grade");
    ban_2nd_grade.value = total_grade_ban2nd;

    //english 1st total grade point

    let total_grade_eng1st = get_grade(eng_1st_num);
    let eng_1st_grade = document.querySelector("#eng-1st-grade");
    eng_1st_grade.value = total_grade_eng1st;

    //english 2nd total grade point

    
    let total_grade_eng2nd = get_grade(eng_2nd_num);
    let eng_2nd_grade = document.querySelector("#eng-2nd-grade");
    eng_2nd_grade.value = total_grade_eng2nd;

    //mathmatices total grade point

    let total_grade_math = get_grade(math_total);
    let math_grade = document.querySelector("#math-grade");
    math_grade.value = total_grade_math;

    //religion total grade point

    let total_grade_religion = get_grade(religion_total);
    let religion_grade = document.querySelector("#religion-grade");
    religion_grade.value = total_grade_religion;

    //ict total grade point

    let total_grade_ict = get_grade(ict_total);
    let ict_grade = document.querySelector("#ict-grade");
    ict_grade.value = total_grade_ict;

    //physics total grade point

    let total_grade_physics = get_grade(physics_total);
    let physics_grade = document.querySelector("#phys-grade");
    physics_grade.value = total_grade_physics;

    //chemistry total grade point

    let total_grade_chemistry = get_grade(chemistry_total);
    let chemistry_grade = document.querySelector("#chem-grade");
    chemistry_grade.value = total_grade_chemistry;

    //biology total grade point

    let total_grade_biology = get_grade(biology_total);
    let biology_grade = document.querySelector("#bio-grade");
    biology_grade.value = total_grade_biology;

    //higher-mathmatices total grade point

    let total_grade_higher_math = get_grade(higher_math_total);
    let higher_math_grade = document.querySelector("#higher-math-grade");
    higher_math_grade.value = total_grade_higher_math;

    //bangladesh and global studies total grade point

    let total_grade_b_g_s = get_grade(b_g_s_total);
    let b_g_s_grade = document.querySelector("#B-G-S-grade");
    b_g_s_grade.value = total_grade_b_g_s;

    
    let total_gpa = (total_grade_point_ban1st + total_grade_point_ban2nd + total_grade_point_eng1st + total_grade_point_eng2nd + total_grade_point_math + total_grade_point_religion + total_grade_point_ict + total_grade_point_physics + total_grade_point_chemistry + total_grade_point_biology + total_grade_point_higher_math + total_grade_point_b_g_s); 

    // let gpa_num = (total_gpa / 12);
    
    let total_cgpa = ((total_gpa * 4) / (12 * 4));

    let cgpa = document.querySelector(".grade");

    if (total_cgpa > 4){
        cgpa.innerHTML = 4 + ".00";
    }
    else{
        cgpa.innerHTML = total_cgpa.toFixed(2)
    }




}






