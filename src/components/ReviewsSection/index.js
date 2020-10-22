import React from 'react';
import { MdStar } from 'react-icons/md'

import SectionTitle from '../SectionTitle'

import { Review, ReviewsContainer } from './styles';

function ReviewsSection() {
  return (
    <section>
      <SectionTitle title="Depoimentos" />
      <ReviewsContainer>
        <Review>
          <div className="note">
            <div className="stars">
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
            </div>
            <p>4 dias atrás</p>
          </div>
          <p>Transportei meu veículo com a empresa , chegou antes do prazo 
            que me passaram... Ótimo atendimento</p>

          <p className="author">- João V</p>
        </Review>

        <Review>
          <div className="note">
            <div className="stars">
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
            </div>
            <p>4 dias atrás</p>
          </div>
          <p>Transportei meu veículo com a empresa , chegou antes do prazo 
            que me passaram... Ótimo atendimento</p>

          <p className="author">- João V</p>
        </Review>
        
        <Review>
          <div className="note">
            <div className="stars">
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
              <MdStar color="gold" />
            </div>
            <p>4 dias atrás</p>
          </div>
          <p>Transportei meu veículo com a empresa , chegou antes do prazo 
            que me passaram... Ótimo atendimento</p>

          <p className="author">- João V</p>
        </Review>
      </ReviewsContainer>
    </section>
  );
}

export default ReviewsSection;