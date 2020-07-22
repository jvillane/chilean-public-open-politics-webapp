import React, {useEffect, useState} from "react";
import {Noticia} from "../../../services/news.model";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Grid
} from "@material-ui/core";
import {getMedia, getMediadetails, getPublicFigure, getPublicFigures} from "../../../services/profile.service";
import Avatar from "react-avatar";
import {BASE_URL} from "../../../config";
import {FiguraPublica} from "../../../services/profile.model";

interface Props {
  story: Noticia
  publicFigureId: string
}

export const TimelineStory: React.FC<Props> = ({story, publicFigureId}) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
  const [pfs, setPfs] = useState<FiguraPublica[]>();

  const handleClickOpen = () => () => {
    setOpen(true);
    setScroll('paper');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
    Promise.all([getPublicFigures(), getMedia()])
      .then(() => {
        Promise.all(story.FigurasPublicas.filter(pfId => pfId !== publicFigureId).map(pfId => getPublicFigure(pfId)))
          .then(pfs => setPfs(pfs));
      })
  }, [open]);

  return (
    <>
      <Card className="card-border-top border-warning mb-3" elevation={3}>
        <CardContent>
          <p className="text-justify">{story.Resumen}</p>
          <div className="text-center">
            <Button variant="outlined" fullWidth className="btn-neutral-warning" onClick={handleClickOpen()}>
              <span className="btn-wrapper--label">Ver Detalles</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose} scroll={scroll} fullWidth maxWidth="md">
        <DialogTitle>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <h5 className="m-0 text-warning">Fuentes</h5>
            <div>
              {Object.keys(story.Links).map(source => {
                return (
                  <a key={source} href={story.Links[source]} target="_blank" rel="noopener noreferrer">
                    <Button className="ml-2 btn-pill btn-pill-xs btn-neutral-warning clickable">
                      {source}
                    </Button>
                  </a>
                );
              })}
            </div>
          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            {story.Descripcion}
          </DialogContentText>
          <div>
            {pfs && pfs.map(pf => {
              const mediaDetails = getMediadetails(pf.Id);
              const src = mediaDetails?.avatar ? `${BASE_URL}/img/avatar/${mediaDetails.avatar}` : undefined;
              return (
                <Avatar key={`${pf.Id}`} round className="d-50 mr-3" alt={pf.Nombre} src={src}/>
              )
            })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="text-warning">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
