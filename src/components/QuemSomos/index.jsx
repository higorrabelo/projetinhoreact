import React from 'react';
export function QuemSomos(){

    var styles = {
        fontSize:"20px",
        textAlign:"justify",
        padding:'10px'
    }

    let texto = (
        <>
        <h4>Quem Somos?</h4>
        <p style={styles}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
         as opposed to using 'Content here, content here', making it look like readable English. 
        </p>
        </>
    );

    return(
        <div>
            {texto}
        </div>
    );
}