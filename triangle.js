function calculateMath(){
    const base = document.getElementById('triangle-base');
    const basetext = base.value;
    const mainbase= parseFloat(basetext)
    



    const heighting = document.getElementById('triangle-height');
    const heightText = heighting.value;
    const mainhaight= parseFloat(heightText)
   


    const area=0.5*mainbase*mainhaight;
   

    const totalAreaCal=document.getElementById('triangle_area');
    totalAreaCal.innerText=area;
    

}