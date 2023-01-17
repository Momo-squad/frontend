import {useState, useCallback, useMemo} from 'react'
import FileUpload from "../../../forum/components/FileUpload";

import "../styles/disease.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from '@mui/material/Box';

import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

const Disease = () => {
    const [image, setImage] = useState([]);

    const downloadReport = useCallback(
        (id) => () => {
            //update the order status to Cancelled here
            toast.success("Report downloaded");
    },[]);

    const deleteReport = useCallback(
        (id) => () => {
        //do the delete post request here
        toast.success("Order Removed successfully");
        
        setTimeout(() => {
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        })
    }, []);


    const localDate = new Date().toLocaleDateString();

    const initialRows = [
        {id: 1, reportId: 1, createdDate: localDate, diseaseDetected: "Fusarium head blight", 
        accuracy: 0.9531, farmName: "Farm 1", plantType: "Annual Vinca",},
        {id: 2, reportId: 2, createdDate: localDate, diseaseDetected: "Seedling blight", 
        accuracy: 0.831, farmName: "Farm 2", plantType: "Balloon Flower"},
        {id: 3, reportId: 3, createdDate: localDate, diseaseDetected: "Tan spot (yellow leaf spot)", 
        accuracy: 0.9123, farmName: "Farm 2", plantType: "Bacopa"},
        {id: 4, reportId: 4, createdDate: localDate, diseaseDetected: "Wheat Streak Mosaic Virus", 
        accuracy: 0.6704, farmName: "Farm 3", plantType: "American Marigold"}
    ];

    const [rows, setRows] = useState(initialRows);
    const columns = useMemo(() => [
        {  
            field: 'reportId',
            headerName: 'Report ID',
            type: "string",
            width: 90,
        },
        {
            field: 'createdDate',
            headerName: 'Created Date',
            width: 120,
        },
        {
            field: 'diseaseDetected',
            headerName: 'Disease Detected',
            type: "string",
            width: 210,
        },
        {
            field: 'accuracy',
            headerName: 'Accuracy',
            type: "number",
            width: 110,
        },
        {
            field: 'farmName',
            headerName: 'Farm Name',
            type: "string",
            width: 150,
        },
        {
            field: 'plantType',
            headerName: 'Plant Type',
            type: 'string',
            width: 150,
        },
        {
            field: 'download',
            headerName: "Download",
            type: 'actions',
            width: 100,
            getActions: (params) => [
              <GridActionsCellItem
                icon={<CloudDownloadIcon />}
                label="Download"
                onClick={downloadReport(params.reportId)}
              />
            ],
          },
        {
            field: 'actions',
            headerName: "Actions",
            type: 'actions',
            width: 100,
            getActions: (params) => [
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={deleteReport(params.id)}
              />
            ],
          },
    ], [deleteReport],
    );

    return(
        <>
        <label htmlFor="#" className="content-header">Disease Detection</label>
        <div className="disease-page-wrapper">
            <div className="disease-container">
                <FileUpload image={image} setImage={setImage}/>
                <div className="disease-descritpion-container">
                    This is the descritpion for the disease detected
                </div>
            </div>
            <label htmlFor="#" className='data-grid-header'>Your past reports</label>
            <div className="past-reports-container">
                <div className="orders-data-grid">
                    <Box sx={{ 
                    height: 316,
                    width: '100%',
                    backgroundColor: "white"
                    }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick />
                    </Box>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    )
}

export default Disease;