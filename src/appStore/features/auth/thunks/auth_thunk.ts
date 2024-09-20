
// -1 create before or in march _16_2022
import {createAsyncThunk} from "@reduxjs/toolkit";
import {base_url_user} from "../../../../utils/constants";
import {Platform} from "react-native";
/*import {
    customized__UN____Vote__BY_Logger__Response,
    customized_up__Vote__BY_Logger__Response,
    delete_Account_PayLoad_interface, delete_Account_Response_Interface,
    delta,
    forget_PassWord_Response_Interface,
    login__response__with_userName__password,
    login_Request_API_payload_interface,
    passWord__Update_Response_Interface,
    password_Change_Payload_Interface, phone_Verify_Success_OR_Failure_Interface,
    registration_interface,
    registration_Request_API_payload_interface,
    Registration_Resonse_interface,
    settings__un_Vote_payload_interface,
    settings__UP_Vote_payload_interface,
    update_cover_payload_interface,
    update_profile_payload_interface,
    weXprez_Logger_User_Interface
} from "../../../Reducers/authSlice";*/
import {update_vault_with_login_with_userName_Response} from "../auth_methods";
import {
    customized__UN____Vote__BY_Logger__Response,
    customized_up__Vote__BY_Logger__Response,
    delete_Account_PayLoad_interface, delete_Account_Response_Interface,
    delta,
    forget_PassWord_Response_Interface,
    login__response__with_userName__password,
    login_Request_API_payload_interface,
    passWord__Update_Response_Interface,
    password_Change_Payload_Interface, phone_Verify_Success_OR_Failure_Interface,
    registration_interface,
    registration_Request_API_payload_interface,
    Registration_Resonse_interface,
    settings__un_Vote_payload_interface,
    settings__UP_Vote_payload_interface,
    update_cover_payload_interface,
    update_profile_payload_interface,
    weXprez_Logger_User_Interface
} from "../../../interfaces_slices/auth/auth_interfaces";

export const register_with_WXX = createAsyncThunk(

    'users/register_with_WXX',

    async (reg_payload_:registration_Request_API_payload_interface, thunkAPI) => {
        try {

            const response = await fetch(
                `${base_url_user}registration`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({


                        user_name: reg_payload_.userName,
                        full_name: reg_payload_.userFull_Name,
                        mobile_no: reg_payload_.userMobile,

                        email: reg_payload_.userEmail,
                        password: reg_payload_.userPassword,

                    }),
                },
            );

            const data = await response.json();


            if ((response.status === 200)||(response.status === 201)) {


                const temp_Reg_data:Registration_Resonse_interface = data;



                console.log("temp_Reg_data: ",temp_Reg_data);
                // Registration_Resonse_interface


                // return;


                if(temp_Reg_data.success){


                    // console.log("at temp_data_by_login_with__userName_password");


                    /*
                    const modified__login_With_UserName_Password: Registration_Resonse_interface=

                        {
                            ...temp_data_by_login_with__userName_password,
                            login_id: Number(temp_data_by_login_with__userName_password.login_id),

                        };

                    const payLoad_delta:delta={
                        ...modified__login_With_UserName_Password,
                        password: user_Name_nd__Password.password,

                    };
                    await update_vault_with_login_with_userName_Response(
                        payLoad_delta

                    );

                    console.log("modified__login_With_UserName_Password: ",modified__login_With_UserName_Password);
                    */
                    return temp_Reg_data;
                }

                //   else if (temp_data_by_login_with__userName_password.success === false){
                else if (!temp_Reg_data.success){

                    // Alert.alert(`${temp_data_by_login_with__userName_password.message}`);
                    // console.log("Password not match. ___in ___AuthSlice");

                    return temp_Reg_data;
                }


                else{
                    console.log("at final else of login__","____ll");

                    return temp_Reg_data;

                }


            } else {
                console.log("__data__: ",data);

                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            console.log('Error___', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// 0 create on or before march 16_2022
export const login_With_username_Password_Async = createAsyncThunk(

    'users/loginWithEmailPassword',

    async (
        user_Name_nd__Password:login_Request_API_payload_interface,
        thunkAPI
    ) => {
        try {

            // console.log("________userID:_________at[user_Name_nd__Password]=> ___ ", user_Name_nd__Password);

            if(user_Name_nd__Password.user_name !== ""){


                const response = await fetch(
                    `${base_url_user}login`,
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            user_name: user_Name_nd__Password.user_name,
                            password: user_Name_nd__Password.password,
                        }),
                    },
                );

                const data = await response.json();



                if (response.status === 200) {


                    const temp_data_by_login_with__userName_password:login__response__with_userName__password = data;


                    if(temp_data_by_login_with__userName_password.login_id){


                        // console.log("at temp_data_by_login_with__userName_password");


                        const modified__login_With_UserName_Password: login__response__with_userName__password=

                            {
                                ...temp_data_by_login_with__userName_password,
                                login_id: Number(temp_data_by_login_with__userName_password.login_id),

                            };



                        const payLoad_delta:delta={
                            ...modified__login_With_UserName_Password,
                            password: user_Name_nd__Password.password,

                        };
                        await update_vault_with_login_with_userName_Response(
                            payLoad_delta

                        );



                        // console.log("modified__login_With_UserName_Password: ",modified__login_With_UserName_Password);

                        return modified__login_With_UserName_Password;




                    }

                    //   else if (temp_data_by_login_with__userName_password.success === false){
                    else if (!temp_data_by_login_with__userName_password.success){

                        // Alert.alert(`${temp_data_by_login_with__userName_password.message}`);
                        // console.log("Password not match. ___in ___AuthSlice");

                        return temp_data_by_login_with__userName_password;
                    }


                    else{
                        console.log("at final else of login__","____ll");

                        return temp_data_by_login_with__userName_password;





                    }


                } else {
                    console.log("__data__: ",data);

                    return thunkAPI.rejectWithValue(data);
                }


            }



            else{

                console.log("__at __else___ login with mobile_no___");

                const response = await fetch(
                    `${base_url_user}login`,
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            mobile_no: user_Name_nd__Password.mobile_no,
                            password: user_Name_nd__Password.password,
                        }),
                    },
                );


                const data = await response.json();

                if (response.status === 200) {

                    const temp_data_by_login_with__Phone_password: login__response__with_userName__password = data;


                    if(temp_data_by_login_with__Phone_password.login_id){


                        // console.log("at temp_data_by_login_with__userName_password");


                        const modified__login_With_UserName_Password: login__response__with_userName__password=

                            {
                                ...temp_data_by_login_with__Phone_password,
                                login_id: Number(temp_data_by_login_with__Phone_password.login_id),

                            };



                        const payLoad_delta:delta={
                            ...modified__login_With_UserName_Password,
                            password: user_Name_nd__Password.password,

                        };
                        await update_vault_with_login_with_userName_Response(
                            payLoad_delta

                        );



                        // console.log("modified__login_With_UserName_Password: ",modified__login_With_UserName_Password);

                        return modified__login_With_UserName_Password;




                    }

                    //   else if (temp_data_by_login_with__userName_password.success === false){
                    else if (!temp_data_by_login_with__Phone_password.success){

                        // Alert.alert(`${temp_data_by_login_with__userName_password.message}`);
                        // console.log("Password not match. ___in ___AuthSlice");

                        return temp_data_by_login_with__Phone_password;
                    }


                    else{
                        console.log("at final else of login__","____ll");

                        return temp_data_by_login_with__Phone_password;





                    }


                } else {
                    console.log("__data__: ",data);

                    return thunkAPI.rejectWithValue(data);
                }
            }



        } catch (error: any) {
            console.log('Error___', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



// 04th august,2022
// get_Any_User_OR_Logger_Score_Data
export const get__Logger_Score_Data= createAsyncThunk(
    'users/logger_Score_Data',
    async (
        userID: number,
        thunkAPI
    ) => {
        try {


            const response = await fetch(
                `${base_url_user}score_details`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: userID,
                    }),
                }
            );
            const data = await response.json();

            if (response.status === 200) {

                const temp_get_user_Profile_data= data;

                // console.log("data profile_ dAta: ",data);





                const modified__logger_Profile_Data:weXprez_Logger_User_Interface=

                    {
                        ...temp_get_user_Profile_data,
                        /*
                        ...temp_get_user_Profile_data,
                        buzz_countdown: Number(temp_get_user_Profile_data.buzz_countdown),
                        buzz_req_countdown: Number(temp_get_user_Profile_data.buzz_req_countdown),
                        email_verify: Number(temp_get_user_Profile_data.email_verify),
                        otp_verify: Number(temp_get_user_Profile_data.otp_verify),
                        ref_counter: Number(temp_get_user_Profile_data.ref_counter),
                        status: Number(temp_get_user_Profile_data.status),
                        trip_countdown: Number(temp_get_user_Profile_data.trip_countdown),
                        buzz_req_available: Number(temp_get_user_Profile_data.buzz_req_available),
                        */
                    };


                // console.log("temp_get_user_Profile_data: ",temp_get_user_Profile_data);
                //
                // return;


                return modified__logger_Profile_Data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);






// 02 created around march 16_2022
// populate_logger_offline_status
export const get_User_Profile_With_UserID_Async = createAsyncThunk(
    'users/profile',
    async (
        userID: number,//string,//number,//string,
        thunkAPI) => {
        try {
            // console.log("userID in ", userID);

            const response = await fetch(
                `${base_url_user}get_user_profile`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: userID,
                    }),
                }
            );
            const data = await response.json();
            // console.log('response _____in authSlice (getUserProfile): ', data.status);
            // console.log("loggerPerson_temp: ", loggerPerson_temp.status);
            if (response.status === 200) {

                const temp_get_user_Profile_data= data;

                // console.log("data profile_ dAta: ",data);





                const modified__logger_Profile_Data:weXprez_Logger_User_Interface=

                    {
                        ...temp_get_user_Profile_data,
                        /*
                        ...temp_get_user_Profile_data,
                        buzz_countdown: Number(temp_get_user_Profile_data.buzz_countdown),
                        buzz_req_countdown: Number(temp_get_user_Profile_data.buzz_req_countdown),
                        email_verify: Number(temp_get_user_Profile_data.email_verify),
                        otp_verify: Number(temp_get_user_Profile_data.otp_verify),
                        ref_counter: Number(temp_get_user_Profile_data.ref_counter),
                        status: Number(temp_get_user_Profile_data.status),
                        trip_countdown: Number(temp_get_user_Profile_data.trip_countdown),
                        buzz_req_available: Number(temp_get_user_Profile_data.buzz_req_available),
                        */
                    };


                // console.log("temp_get_user_Profile_data: ",temp_get_user_Profile_data);
                //
                // return;


                return modified__logger_Profile_Data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);




// -002 MIGHT BE NEEDED IN FUTURE WITH IMAGE UPLAD IN TRIPZCHAT FOR WEXPRZ
export const create_user_in_registration_page = createAsyncThunk(

    'users/create_user_in_registration_page',
    async (
        userData:registration_interface,


        thunkAPI) => {
        try {

            // console.log(" << userData: >> ", userData);


            // --------- ----------- ----------- VERSION 1 BEGINS HERE  -------- ----------- -----------
            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer access-token");
            // myHeaders.append("otherHeader", "foo");
            // myHeaders.append("Content-Type", "multipart/form-data;");
            // multipart/form-data
            // : "multipart/form-data; ",

            const formData = new FormData();



            /*
            console.log("  \n\n\n ",);

            console.log(" << userData: >> ", userData);
            console.log(" << userData.name >> ", userData.name);
            console.log(" << userData.mobile_no >> ", userData.mobile_no);
            console.log(" << userData.email >> ",  userData.email);
            console.log(" << userData.password >> ", userData.password);
            console.log(" << userData.image.uri: >> ", userData.image.uri);

            console.log(" \n\n\n ", );
            */



            formData.append('image', {
                uri: userData.image.uri,
                filename: 'image.png',
                type: 'image/png',


                //data: userData.imageData, // this could be neeeded...
            });



            // esponse _____in authSlice:  {"message":"Email already exists."}





            formData.append("name", userData.name);
            formData.append("mobile_no", userData.mobile_no);
            formData.append("email", userData.email);
            formData.append("password", userData.password);

            const registrationURL =
                "https://tripzchat.com/api_dev/api/user/registration";
            // "http://192.168.0.103:3000/upload";





            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formData,
                // redirect: 'follow'
            };



            const response = await fetch(registrationURL, requestOptions);




            // const data2 = await response.text(); /// THIS IS IMPORTANT... not in this case..

            const data2 = await response.json();
            // console.log('response _____in authSlice: ', data2);

            // console.log( "____ *** response.text()); *** ____", response.text());

            // console.log("  << status: authSlice with userID >> ", response.status);
            if (response.status === 200) {

                // console.log("status: authSlice with userID  ", response.status);

                // localStorage.setItem('token', data.token);

                return data2;
            } else {
                return thunkAPI.rejectWithValue(data2);
            }


        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



// begins-- cover...

export const update_logger_Cover__Photo_payload = createAsyncThunk(

    'users/update_logger_Cover__Photo_payload',
    async(
        logger_profile__Cover_edit_data: update_cover_payload_interface,

        thunkAPI
    ) => {
        try {




            // else{

            if(logger_profile__Cover_edit_data.cover__image_Data !== null){

                console.log("imagesState.uri, ", logger_profile__Cover_edit_data.cover__image_Data.uri);
                console.log("imagesState.type, ", logger_profile__Cover_edit_data.cover__image_Data.type);


                const heavY_Data = new FormData();

                heavY_Data.append('image', {
                    //     data.append('myFile', {
                    // eslint-disable-next-line no-useless-concat
                    // name: `${`${imagesState.title}.${imagesState.mime.split('/')[1]}`}`,
                    // name: imagesState[0].title,
                    // name:
                    name: 'image',
                    filename: 'image.png',
                    type: logger_profile__Cover_edit_data.cover__image_Data.type,
                    uri: Platform.OS === 'ios' ?
                        logger_profile__Cover_edit_data.cover__image_Data.uri.replace('file://', '')
                        : logger_profile__Cover_edit_data.cover__image_Data.uri,
                });



                heavY_Data.append("user_id", `${logger_profile__Cover_edit_data.user_id}`);
                // data.append("full_name", "Arefin Sultan (Mobile)");
                // data.append("country", "Bangladesh");
                // data.append("bio", "outlander");
                // data.append("sex", "Male");
                // data.append("status", "Single");
                // data.append("birth_date", "1997-08-21");



                const url =`${base_url_user}upload_cover_image`;

                // "https://wexprez.com/wex_api/api/user/profile_update";





                // VERSION 02 BEGINS HERE....---------------------------------------


                const requestOptions = {


                    method: 'POST',
                    headers: {
                        // "Content-Type": "multipart/form-data; ",
                        Authorization: 'Bearer access-token',
                        otherHeader: 'foo',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: heavY_Data,
                    // redirect: 'follow',
                    // redirect: 'follow'
                };







                const response_with_file_image= await fetch(url, requestOptions);

                const data2 = await response_with_file_image.json();

                // console.log('profile_update__response: ', data2);
                // console.log("response_with_file_image.status: ",response_with_file_image.status)

                if ((response_with_file_image.status === 200) || (response_with_file_image.status === 201)) {


                    // console.log("_profile_update_success_response: ", data2);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data2;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data2);
                }



                // }
            }

            else{

                console.log("---image cover null");
            }




        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
// end convers-__



export const update_logger_profile_without_interest_payload = createAsyncThunk(

    'users/update_logger_profile_without_interest_payload',
    async(
        logger_profile_edit_data: update_profile_payload_interface,

        thunkAPI
    ) => {
        try {


            // if(Object.keys(profile_Image_State_I_Picker).length >0){
            if (logger_profile_edit_data.image_Data === null) {

                console.log("__user id: ",logger_profile_edit_data.user_id);
                console.log(`logger_profile_edit_data.image_Data === null: ${logger_profile_edit_data.image_Data === null}`);




                const someDate = logger_profile_edit_data.birth_date;
                const current_Date =  (`0${someDate.getDate()}`).slice(-2); //d.getDate();
                const curr_month = (`0${someDate.getMonth() + 1}`).slice(-2); //Months are zero based  // ("0" + (this.getMonth() + 1)).slice(-2)
                const curr_year = someDate.getFullYear();

// console.log(` RPG => ${curr_year}-${curr_month}-${current_Date}`);

                const newDateSelected=  `${curr_year}-${curr_month}-${current_Date}`;

                console.log("newDateSelected: ",newDateSelected); //"1992-12-31"

                const data = new FormData();

                data.append("bio",          `${logger_profile_edit_data.bio}`);
                data.append("birth_date",   `${newDateSelected}`);



                data.append("country",      `${logger_profile_edit_data.country}`);
                data.append("full_name",     `${logger_profile_edit_data.full_name}`);
                data.append("marital_status",`${logger_profile_edit_data.married_Status_String}`);

                data.append("sex",           `${logger_profile_edit_data.sex}`);

                data.append("user_id",      `${logger_profile_edit_data.user_id}`); // with out string it doesn't work.

                const url = `${base_url_user}profile_update`;


                const requestOptions = {


                    method: 'POST',
                    headers: {
                        // "Content-Type": "multipart/form-data; ",
                        Authorization: 'Bearer access-token',
                        otherHeader: 'foo',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
                    // redirect: 'follow',
                    // redirect: 'follow'
                };

                const response= await fetch(url, requestOptions);




                const data22 = await response.json();
                console.log('profile_update__response: ', data22);
                if ((response.status === 200) || (response.status === 201)) {


                    // console.log("_profile_update_success_response: ", data);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data22;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data22);
                }

            }

            else{

                console.log("imagesState.uri, ", logger_profile_edit_data.image_Data.uri);
                console.log("imagesState.type, ", logger_profile_edit_data.image_Data.type);


                const data = new FormData();

                data.append('image', {
                    //     data.append('myFile', {
                    // eslint-disable-next-line no-useless-concat
                    // name: `${`${imagesState.title}.${imagesState.mime.split('/')[1]}`}`,
                    // name: imagesState[0].title,
                    // name:
                    name: 'image',
                    filename: 'image.png',
                    type: logger_profile_edit_data.image_Data.type,
                    uri: Platform.OS === 'ios' ?
                        logger_profile_edit_data.image_Data.uri.replace('file://', '')
                        : logger_profile_edit_data.image_Data.uri,
                });



                data.append("user_id",      `${logger_profile_edit_data.user_id}`); // with out string it doesn't work.
                data.append("bio",          `${logger_profile_edit_data.bio}`);
                data.append("birth_date",   `${logger_profile_edit_data.birth_date}`);
                data.append("country",      `${logger_profile_edit_data.country}`);
                data.append("full_name",     `${logger_profile_edit_data.full_name}`);

                data.append("sex",           `${logger_profile_edit_data.sex}`);
                data.append("marital_status",`${logger_profile_edit_data.married_Status_String}`);

                // data.append("image", fileInput.files[0], "[PROXY]");

                // 70-18-8B-81-D9-89
                // F4-60-E2-AC-1C-2A


                const url =
                    // "https://tripzchat.com/api_dev/api/user/testImageUpload";
                    // "https://tripzchat.com/api_dev/api/user/testImageUpload";
                    // "http://localhost:3000/upload";
                    // "http://192.168.0.103:3000/upload";
                    `${base_url_user}profile_update`;



                // return;

                // VERSION 01 BEGINS HERE..............................
                /*
                const response = await fetch(url, {
                    method: "post",
                    body: data,
                    headers: {
                        "Content-Type": "multipart/form-data; ",
                    },
                });


                console.log("response: ", response);
                setImageState(initialImagesState);



                */



                // VERSION 02 BEGINS HERE....---------------------------------------


                const requestOptions = {


                    method: 'POST',
                    headers: {
                        // "Content-Type": "multipart/form-data; ",
                        Authorization: 'Bearer access-token',
                        otherHeader: 'foo',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
                    // redirect: 'follow',
                    // redirect: 'follow'
                };


                const response_with_file_image= await fetch(url, requestOptions);

                const data2 = await response_with_file_image.json();

                // console.log('profile_update__response: ', data2);
                // console.log("response_with_file_image.status: ",response_with_file_image.status)

                if ((response_with_file_image.status === 200) || (response_with_file_image.status === 201)) {


                    // console.log("_profile_update_success_response: ", data2);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data2;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data);
                }

                /*


                if ((result.status === 200) || (response.status === 201)) {


                    console.log("_profile_update_success_response: ", data);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data);
                }
                */

            }


        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);






export const update_password_async = createAsyncThunk(

    'users/updatePassword',
    async (
        userId_newAND_OLD_password:password_Change_Payload_Interface,

        // userID:string
        /*{ email, password }*/
        thunkAPI) => {
        try {


            const response = await fetch(
                `${base_url_user}change_password`,
                // 'https://tripzchat.com/api_dev/api/user/changePassword',

                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // userId: userID,

                        user_id: userId_newAND_OLD_password.user_id,
                        new_password: userId_newAND_OLD_password.new_password,
                        current_password: userId_newAND_OLD_password.current_password,



                        // user_id: localStorage.id,
                        // current_password: TextInput_current_passwordState.trim(),
                        // new_password: textInput_new_password_Confirm_State.trim(),
                        // "user_id": "2",
                        // "current_password": "12345",
                        // "new_password": "1234567",



                    }),
                }
            );
            const data:passWord__Update_Response_Interface = await response.json();
            // console.log('response _____in authSlice: ', data);
            if (response.status === 200) {

                // console.log("status: authSlice with userID  ", response.status);

                // localStorage.setItem('token', data.token);

                return data;






                // return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const forGet_Password_Page_API = createAsyncThunk(

    'users/forGet_Password_Page_API',

    async (

        userEmail_or_user_Name:string,

        thunkAPI) => {
        try {


            const response = await fetch(
                `${base_url_user}forgot_password`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: userEmail_or_user_Name,

                    }),
                }
            );


            const data:forget_PassWord_Response_Interface = await response.json();
            // console.log('response _____in authSlice: ', data);
            if (response.status === 200) {

                // console.log("status: authSlice with userID  ", response.status);

                // localStorage.setItem('token', data.token);


                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);









// 11 --number added on may_8
export const un___Vote_bY_Logger_on_Settings_Page=  createAsyncThunk(
    'users/un___Vote_bY_Logger_on_Settings_Page',
    async (


        settings___un_Vote__By____Logger__payload: settings__un_Vote_payload_interface,

        thunkAPI
    ) => {

        try {
            const response = await fetch(

                `${base_url_user}user_unvote`,

                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify ({

                        user_id: settings___un_Vote__By____Logger__payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                        vote_id: settings___un_Vote__By____Logger__payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                        // type: settings_OF__Logger_upvote_payload.type,//



                    }),
                },
            );
            const data = await response.json();
            // console.log('un__vote response::: ', data);

            if ((response.status === 200) ||(response.status === 201)) {



                const customized_un_Vote_Response_Data: customized__UN____Vote__BY_Logger__Response ={

                    user_id: settings___un_Vote__By____Logger__payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                    vote_id: settings___un_Vote__By____Logger__payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                    // type: settings_OF__Logger_upvote_payload.type,// "up"
                    previous_Type: settings___un_Vote__By____Logger__payload.previous_Type,
                    success: data.success,          //5.

                    message: data.message,

                };

                // DON'T UNCOMMENT THEM:

                if(data.success){

                    return customized_un_Vote_Response_Data;
                }
                else{

                    console.log("___un___Vote_bY_Logger_on_Settings_Page_--_-__vote unsuccessful");
                }

            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);




// added on may__5_2022:

// 12..
export const up__Vote_bY_Logger_on_Settings_Page=  createAsyncThunk(
    'users/up__Vote_bY_Logger_on_Settings_Page',
    async (


        settings_OF__Logger_upvote_payload: settings__UP_Vote_payload_interface,

        thunkAPI
    ) => {

        try {
            const response = await fetch(

                `${base_url_user}user_vote`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify ({

                        user_id: settings_OF__Logger_upvote_payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                        vote_id: settings_OF__Logger_upvote_payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                        type: settings_OF__Logger_upvote_payload.type,//


                    }),
                },
            );
            const data = await response.json();
            // console.log('activity/vote response::: ', data);

            if ((response.status === 200) ||(response.status === 201)) {



                const customized_up_Down_Vote_Response_Data: customized_up__Vote__BY_Logger__Response ={

                    user_id: settings_OF__Logger_upvote_payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                    vote_id: settings_OF__Logger_upvote_payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                    type: settings_OF__Logger_upvote_payload.type,// "up"
                    success: data.success,          //5.

                    previouse_Type: settings_OF__Logger_upvote_payload.previouse_Type,
                    message: data.message,

                };

                // DON'T UNCOMMENT THEM:

                if(data.success){

                    return customized_up_Down_Vote_Response_Data;
                }
                else{

                    console.log("___-___up__Vote_bY_Logger_on_Settings_Page_____---____vote unsuccessful");
                }

            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



//12 added on may__20,2022:


export const get_all_Likers_of_Logger_Profile = createAsyncThunk(
    'users/get_all_Likers_of_Logger_Profile',
    async (
        userID: number,//string,

        thunkAPI) => {



        console.log("____userID___: ",userID);
        try {


            // console.log("at <<get_all_active_partners>> and userID: ",userID);

            const response = await fetch(
                `${base_url_user}user_voteUp_list`,
                // 'https://wexprez.com/wex_api/api/user/followers',
                // 'https://tripzchat.com/api_dev/api/myPartner/getAllPartner',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                            // partner_id: userID,
                            "user_id": userID,
                        }
                    ),


                }
            );
            const data = await response.json();




            if (response.status === 200) {


                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// 13. added on may__07_2022 all dislikers of logger profile


export const get_all___Down_Voters__Dis_Likers_of_Logger_Profile = createAsyncThunk(
    'users/get_all___Down_Voters__Dis_Likers_of_Logger_Profile',
    async (
        userID: number,//string,

        thunkAPI) => {

        console.log("____userID___: ",userID);
        try {
            const response = await fetch(
                `${base_url_user}user_voteDown_list`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                            "user_id": userID,
                        }
                    ),
                }
            );
            const data = await response.json();

            if (response.status === 200) {
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 13 ends dislikers list---may_07_2022


/*

export const logout5 = createAsyncThunk(
    'auth/logout5',
    async (

        thunkAPI) => {
        try {

            await AsyncStorage.clear();


        } catch (error:any) {
            console.log('Error', error.response.data);

        }
    }
);

*/





// 11 --number added on may_8
export const delete_Logger_Account=  createAsyncThunk(
    'users/delete_Logger_Account',
    async (


        logger_ID_Object: delete_Account_PayLoad_interface,

        thunkAPI
    ) => {

        try {
            const response = await fetch(

                `${base_url_user}user_profile_delete`,

                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify ({

                        user_id: logger_ID_Object.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                        //vote_id: settings___un_Vote__By____Logger__payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                        // type: settings_OF__Logger_upvote_payload.type,//



                    }),
                },
            );
            const data = await response.json();
            // console.log('un__vote response::: ', data);

            if ((response.status === 200) ||(response.status === 201)) {



                const delete_Account__Response_Data: delete_Account_Response_Interface ={

                    user_id: logger_ID_Object.user_id,//settings___un_Vote__By____Logger__payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                    //vote_id: settings___un_Vote__By____Logger__payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                    // type: settings_OF__Logger_upvote_payload.type,// "up"
                    //previous_Type: settings___un_Vote__By____Logger__payload.previous_Type,
                    success: data.success,          //5.

                    message: data.message,

                };

                // DON'T UNCOMMENT THEM:

                /*  if(data.success){

                      return customized_un_Vote_Response_Data;
                  }
                  else{

                      console.log("___un___Vote_bY_Logger_on_Settings_Page_--_-__vote unsuccessful");
                  }*/



                return delete_Account__Response_Data;

            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



// -1 create before or in march _16_2022
export const sent_phone_verify_to_Wexprez = createAsyncThunk(

    'users/sent_phone_verify_to_Wexprez',

    async (user_ID_For_PHone_Verify:number, thunkAPI) => {
        try {

            console.log("________userID:_________at[sent_phone_verify_to_Wexprez]=> ___ ", user_ID_For_PHone_Verify);

            const request_URL=`${base_url_user}phone_verify`;
            const response = await fetch(

                request_URL,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        user_id: user_ID_For_PHone_Verify,//phone_With_CountryCode_State.userID,


                    }),
                },
            );

            const data = await response.json();


            if ((response.status === 200)||(response.status === 201)) {

                const temp_Reg_data:phone_Verify_Success_OR_Failure_Interface = data;

                console.log("sent_phone_verify_to_Wexprez Response_200: ",temp_Reg_data);

                if (temp_Reg_data.success){
                    return temp_Reg_data;
                }


                else if (!temp_Reg_data.success){
                    return temp_Reg_data;
                }

            } else {
                console.log("__data__ sent_phone_verify_to_Wexprez Response_ !==200: ",data);

                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            console.log('Error___ sent_phone_verify_to_Wexprez Response_ !==200', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
