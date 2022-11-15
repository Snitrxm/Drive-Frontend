import noImage from "../Images/no-image.svg";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { getSignedUrl } from "../services/api";
import { saveAs } from "file-saver";
import { CircularProgress } from "@mui/material";
import folderImage from "../Images/folder.svg"
import { useNavigate } from "react-router-dom";

const CardsComponent = ({ files, handleDeleteFile, loading }: any) => {
    const navigate = useNavigate();

    const handleDownloadFile = async (key: string) => {
        const { url } = await getSignedUrl(key)
        saveAs(url)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {files.length > 0  ? (files.map((file: any) => {
                return (
                    <>
                        {!file.isFileInsideFolder ? (
                            <div className="w-64 h-44 rounded-md border" key={file}>
                            {file.isFolder ? (
                                <button className="border-b-[1px] h-[100%] flex justify-center items-center cursor-pointer w-[100%]" onClick={() => navigate(`folder/${file.name}`)}>
                                    <img src={folderImage} alt="" className="h-[60%] w-[60%]" />
                                </button>
                            ) : (
                                <>
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
                                                        <h1 className="p-1 font-light">{file.name}</h1>
                                                    </Button>
                                                    <Menu {...bindMenu(popupState)}>
                                                        <MenuItem onClick={() => {popupState.close(); handleDownloadFile(file.Key)}}>Download File</MenuItem>
                                                        <MenuItem onClick={() => {popupState.close(); handleDeleteFile(file.Key)}}>Delete File</MenuItem>
                                                    </Menu>
                                                </React.Fragment>
                                            )}
                                        </PopupState>
                                    )}
                                </>
                            )}
                        </div>
                    ) : null}
                    </>
                    
                )
            })) : (
                <>
                    {loading ? (
                        <div className="flex justify-center items-center h-[40%]">
                            <CircularProgress />
                        </div>
                    ): (
                        <h1>No files</h1>
                    )}
                </>
            )}
        </div>
    );
}

export default CardsComponent;