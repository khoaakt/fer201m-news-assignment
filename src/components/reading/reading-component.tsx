import { Dialog, DialogContent, DialogContentText, DialogTitle, SpeedDial, SpeedDialAction, useTheme } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { setOpenReader } from '../../stores/reader-slice';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

export default function ReadingComponent() {
    const dispatch = useDispatch();

    const currentNews = useSelector(
        (state: any) => state.reader.data.news
    );
    const isOpenReader: boolean = useSelector(
        (state: any) => state.reader.data.isOpenReader
    );

    return ( currentNews &&
        <Dialog fullScreen open={isOpenReader} disableEscapeKeyDown hideBackdrop>
            <DialogContent>
                {Object.keys(currentNews).length === 0 ? <DialogTitle style={{ textAlign: 'center' }}>Loading...</DialogTitle> :
                    <>
                        <DialogTitle style={{ textAlign: 'center' }}>{ currentNews.title }</DialogTitle>
                        <DialogContentText style={{ fontSize: '1.1rem', fontWeight: '500 !important' }}>
                            {
                                <div className="news-content-html" dangerouslySetInnerHTML={{ __html: currentNews.content }} />
                            }
                        </DialogContentText>
                    </>
                }
            </DialogContent>
            <SpeedDial
                ariaLabel=""
                style={{ position: "absolute", bottom: 25, right: 25 }}
                hidden={!isOpenReader}
                icon={<CloseIcon />}
                FabProps={{ onClick: () => { dispatch(setOpenReader(false)) }, title: "Close Reader" }}
                open
            >
                <SpeedDialAction
                    icon={<PublicIcon />}
                    tooltipTitle={"View Original Page"}
                    onClick={() => {
                        window.open(currentNews.url)
                    }}
                />
            </SpeedDial>
        </Dialog>
    )
}