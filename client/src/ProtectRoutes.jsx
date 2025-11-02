import { Navigate } from "react-router-dom";


// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModal.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json('success')
//                 } else {
//                     res.json('The password is incorrect')
//                 }
//             } else {
//                 res.json('User not found')
//             }
//         })
//         .catch(err => res.json(err))
// })

const ProtectRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectRoutes;
