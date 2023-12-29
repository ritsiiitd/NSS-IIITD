import express from "express";
import * as dotenv from 'dotenv'
import Department from '../mongodb/models/departments.js' ;

dotenv.config();

const router = express.Router();

//GET Team with TeamId
router.route('/:departmentId/:organizationId').get(async(req,res)=>{
    try {
        const { departmentId, organizationId } = req.params;
        const department = await Department.findById(departmentId);

        // Check if the department and organization exist
        if (!department) {
        return res.status(404).json({ message: 'Department not found' });
        }
        const organizationIndex = department.organisations.findIndex(org => org._id.toString() === organizationId);
        if (organizationIndex === -1) {
            return res.status(404).json({ message: 'Organization not found in department' });
        }

        // Remove the organization from the array
        department.organisations.splice(organizationIndex, 1);
        await department.save();

        console.log("Department deleted");
        const stats = await Department.find({});
        res.status(200).json({success: true, data:stats});
        // res.status(200).json({success: true, data:Team});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;