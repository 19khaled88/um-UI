import * as yup from 'yup'



export const adminSchema = yup.object().shape({
    password:yup.string().min(6).max(32).required('Password is required'),
    admin:yup.object().shape({
        name:yup.object().shape({
            firstname:yup.string().required('First  name is required'),
            middlename:yup.string().required("Middle name is required"),
            lastname:yup.string().required('Last Name is required'),
        }),
        email:yup.string().email().required("Email is required"),
        gender:yup.string().required("Gender is required"),
        department:yup.string().required("Department is required"),
        designation:yup.string().required("Designation is required"),
        dateOfBirth:yup.date().required("Date of Birth is required"),
        contactNo:yup.string().required("Contact No is required"),
        emergencyContactNo:yup.string().required("emergency Contact No is required"),
        bloodGroup:yup.string().required("Blood Group is required"),
        presentAddress:yup.string().required("Present Address is required"),
        permanentAddress:yup.string().required("Permanent Address is required")
    })
})