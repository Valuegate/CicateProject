import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import Footer from '../../components/containers/footer/footer'
import CICATE from '../../assets/CICATE.png'
import union from '../../assets/Union.png'
import unionx from '../../assets/Unionx.png'
import tick2 from '../../assets/rightImg.svg'
import './style.css'

const About = () => {
  return (
    <div>
        <Navbar/>
      <div className="cicate_div">
<img className="CICATE" alt="Cicate" src={CICATE} />
</div>

<div className='color_div'>
    <div className='black'>
        <div className='shift'>
            <div className='weheader'>Who We Are?</div>
            <p className='wepara'>At CICATE (Competent International Candidates Assessment, Tests, and Exams), we are a globally recognised organisation 
                dedicated to providing cutting-edge assessment solutions for individuals 
                seeking educational and career opportunities abroad. With a commitment to competence and fairness, we offer a range of assessment products, including G.A.T.E, POCAS, and L.I.S.A, designed to identify candidates' true potential.
<br />
<br />
Our international presence and reputation as a reliable assessment provider make
 us a preferred choice for candidates, institutions, and organisations worldwide.
  CICATE is synonymous with accuracy, integrity, and excellence in competence assesment</p>
</div>
    </div>

    <div className='green'>

    <div className='shift'>
            <div className='weheader'>For What?</div>
            <p className='wepara'>CICATE was founded with a clear mission in mind – to simplify and enhance the selection process for candidates
looking to study or work abroad and to facilitate informed visa decisions. We understand the challenges
candidates face in proving their competence and potential, which can often be subjective and biased. Therefore,
we are committed to offering assessments that are fair, unbiased, and standardised, ensuring a level playing
field for all.
<br />
<br />
Our motivation is rooted in the belief that everyone should have an equal opportunity to pursue their dreams of
studying or working in an international setting. By providing assessments that showcase candidates&#39; true
abilities, we aim to break down barriers and open doors to a world of opportunities.</p>
</div>
    </div>
</div>

<div className='down_boxx'>
    <div className='down_black'>

        <div className='semi'>
            <div className='goal_header'>Our <br />Strategic <br /> Goals</div>
            <div><img src={tick2} alt="img" className='goal_img' /></div>
        </div>

        <div className='two_para'>
            <div className=''>
                <p className='all_para1'>At CICATE, our strategic goals are aligned with our vision of fairness, 
                    reliability, and efficiency in competence assessment:</p>

                <p className='all_para'>Fairness and Objectivity: We strive to maintain the highest
                     levels of fairness and objectivity in our assessments, 
                     ensuring that all candidates are evaluated based on their merits.</p>

                     <p className='all_para'> International Collaboration: We are committed to 
                        expanding our international partnerships with universities, 
                        companies, and governments to provide a 
                        comprehensive assessment solution that 
                        benefits candidates and institutions alike.</p>
                     
                     <p className='all_para'> Streamlining Visa Decisions: We aim to simplify the visa application process
                         by working closely with immigration authorities, making 
                         it easier for candidates with CICATE credentials to obtain visas.</p>
            </div>


            <div className=''>
                <p className='all_para'>Continuous Innovation: We are dedicated to continuously improving our
                     assessment methodologies, incorporating the latest research
                      and technology to provide even more accurate evaluations.</p>

                <p className='all_para'>Candidate Success: Ultimately, our goal is to contribute to the success
                     of candidates by helping them access educational and career
                      opportunities abroad based on their true potential.In conclusion,
                       CICATE is more than an assessment provider; we are a gateway to 
                       a brighter future for candidates worldwide. Our commitment to fairness,
                        reliability, and efficiency
                     drives us to innovate and collaborate, ensuring that candidates
                      have every opportunity to succeed on their international journeys.</p>

                </div>
        </div>

    </div>
    </div>s
<div className='last'>
<div className='image_slant'>
    <div><img src={union} alt="" className='union'/></div>
    <div><img src={unionx} alt="" className='unionx'/></div>
</div>

<div className='image_text1'>
    <div className='testad'>Test Ad <br />Here!</div>
    <div className='test_subheader'>Make sure to reach out to our ads here!</div>
    <button className='buton_test'>Read More</button>
</div>
</div>


<Footer/>
    </div>
  )
}

export default About
