const navbar = () => {
  return `
       <div class="container-fluid pink fixed-top">
      <div class="container">
        <div class="row">
          <div class="col" id="FLAT">
            <img src="https://www.myglamm.com/images/gift.svg" alt="" />
            <p>FLAT 199 Store</p>
            <a href="#" id="Shop-Now" class="decoration">SHOP NOW</a>
          </div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">
            <a href="" class="decoration" style="color: black; font-size: 14px"
              >MyGlamm Store</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid fixed-top" id="NavBar">
      <div class="container" id="NavBar-First">
        <div class="row">
          <div class="col marginTop" style="display:flex;">
           <a href="index.html"
              >
              <img
              src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
              alt=""
            />
              </a
            
            <form action="" class="form inline">
              <input
                type="search"
                name=""
                id="input"
                placeholder="Find Lipstick,Eyeliner,Makeup Tutorial........"
                class="form-control"
              />
            </form>
          </div>

          <div class="col marginTop">
            <div class="row">
              <div class="col"></div>
              <div class="col" style="display: flex">
                <a href=""
                  ><img
                    src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
                /></a>
                <a href="SignUp.html">
                  <img
                    src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/external-user-interface-kiranshastry-gradient-kiranshastry-1.png"
                    alt=""
                  />
                </a>
                <p id="Display-Name"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;text-align:center;width:80%;margin:auto;margin-top:10px">
        <ul class="nav" id="Link">
          <li class="nav-item active">
            <a href="index.html" class="nav-link active black">HOME</a>
          </li>
          <li class="nav-item active">
            <a href="MakeUp.html" class="nav-link active black">MAKEUP</a>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link active black">HAIRCARE</a>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link active black">SKINCARE</a>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link active black">SANITIZING CARE</a>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link active black">COLLECTION</a>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link active black">REWARDS</a>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link active black">MYGLAMM STUDIO</a>
          </li>
          <li class="nav-item active">
            <a href="" class="nav-link active black">OFFERS</a>
          </li>
        </ul>
      </div>
    </div>
    `;
};

export default navbar;
