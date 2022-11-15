import noImage from "../Images/no-image.svg";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { getSignedUrl } from "../services/api";
import { saveAs } from "file-saver";
import { CircularProgress } from "@mui/material";

const CardsComponent = ({ files, handleDeleteFile, loading }: any) => {

    const handleDownloadFile = async (key: string) => {
        const { url } = await getSignedUrl(key)
        saveAs(url)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {files.length > 0 ? (files.map((file: any) => {
                const fileName = file.Key.split("/")[1]
                return (
                    <div className="w-64 h-44 rounded-md border cursor-pointer" key={file}>
                        <div className="border-b-[1px] border-gray-300 h-[60%]">
                            <img src={noImage} alt="" className="h-full w-full" />
                        </div>
                        {loading ? (
                            <div className="flex justify-center items-center h-[40%]">
                                <CircularProgress />
                            </div>
                            
                        ) : (
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                    <Button className="w-[100%] h-[40%] focus:outline-none flex justify-start items-start" {...bindTrigger(popupState)}>
                                        <h1 className="p-1 font-light">{fileName}</h1>
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={() => {popupState.close(); handleDownloadFile(file.Key)}}>Download File</MenuItem>
                                        <MenuItem onClick={() => {popupState.close(); handleDeleteFile(file.Key)}}>Delete File</MenuItem>
                                    </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        )}
                        
                    </div>
                    
                )
            })) : (
                <h1>No files</h1> 
            )}
        </div>
    );
}

export default CardsComponent;