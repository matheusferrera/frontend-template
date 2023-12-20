import React from "react";

import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const AvisoDePrivacidadeModal = ({ showModal, handleClose }) => {
  const modalTitle = "Aviso de Privacidade";
  const modalContent = (
    <>
      <Typography gutterBottom>
        Lorem ipsum dolor sit amet consectetur. Vitae vitae donec fermentum id egestas. Tempus suspendisse at sapien sapien placerat in ut.
        Diam pharetra scelerisque faucibus at. Eget lacus metus nulla massa vulputate nam vel cras. Laoreet dignissim neque diam commodo
        nullam sit accumsan sed ipsum. Eget cursus lacus etiam congue nulla neque odio et morbi. Nunc arcu lorem mus amet. Porta sed risus
        nulla risus. Sit sapien euismod ornare vestibulum gravida scelerisque convallis volutpat. Facilisi sit accumsan tempus faucibus. Sed
        tempor orci felis id. Tristique a tellus lobortis ut. Nisl mollis id scelerisque quis. Interdum velit condimentum in massa ut tellus
        congue. Vulputate eget placerat dignissim cras. Tempor vitae tortor purus tellus nisl sit. Netus mi nam neque vivamus. Dolor
        vulputate faucibus odio malesuada imperdiet. Sed faucibus sed luctus adipiscing commodo. Amet lectus nisl lorem pulvinar vulputate
        sed quis. Vestibulum pretium scelerisque nunc nisl. Lectus libero neque dolor adipiscing dignissim phasellus lectus. Arcu arcu cras
        id diam arcu urna vivamus tortor enim. Cursus vel mi egestas porta vel tincidunt ullamcorper. Lacinia ipsum amet tincidunt tincidunt
        eleifend. Gravida duis in ridiculus tortor massa in. Arcu hendrerit porttitor mauris dictumst ullamcorper justo. Feugiat nullam urna
        sit cum ultricies neque. Amet turpis mattis dictum nulla nulla mattis condimentum. Volutpat ante platea non id sed vel nisl. Vitae
        nulla urna neque feugiat. Facilisis et facilisis lacinia nisi pellentesque nunc malesuada nulla. Auctor dictum vulputate cras lectus
        velit arcu vitae in id. Scelerisque quam in morbi porttitor est elit. Blandit integer non pellentesque magna. Felis eu sit sagittis
        massa auctor congue enim platea. Nulla mauris nec leo imperdiet vitae lorem in. Dignissim risus odio lectus nunc at ipsum dictum
        convallis nunc. Ut pretium sem vitae eget id ridiculus. Consectetur enim senectus proin sapien viverra elementum justo. Cursus
        habitant purus maecenas viverra eu. Sapien vulputate nisi convallis vitae. Egestas a eget aliquet nullam. Id sed integer lacus
        vestibulum facilisi eget id gravida id. Faucibus ornare quisque etiam sit convallis aliquet tincidunt. Tortor elit dolor lorem purus
        tempus id proin facilisis. Ullamcorper risus ornare semper tortor cras diam elementum faucibus augue. Est lectus consectetur nibh
        pharetra at luctus risus. Nibh et nibh et tortor cras. Sed fermentum integer quis malesuada. Posuere feugiat mattis gravida
        porttitor risus massa. Fermentum leo condimentum nunc arcu ut nisi arcu. Amet non et sed amet. Scelerisque aenean volutpat
        vestibulum erat phasellus eget. Pharetra commodo in gravida amet. Mattis non venenatis nec odio at id diam. Tellus viverra non arcu
        nulla mauris ante nisl sollicitudin interdum. Tempor nibh pharetra luctus non. Dui sed interdum parturient vitae et blandit nunc
        curabitur cras. Iaculis pretium consectetur in lorem augue enim mattis netus placerat. Viverra id felis nibh faucibus sit. Et aenean
        enim et in. Non augue risus lacus aliquet nunc dictum egestas volutpat faucibus. Tortor elementum volutpat sit.
      </Typography>
    </>
  );

  const modalButtons = [{ label: "Concordar", onClick: handleClose }];

  return (
    <CustomModal
      showModal={showModal}
      handleClose={handleClose}
      title={modalTitle}
      content={modalContent}
      buttons={modalButtons}
    />
  );
};

AvisoDePrivacidadeModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AvisoDePrivacidadeModal;
