//./readme.md:start
//md: # math_constants 
//md: this repository just acts as a collection for various math constants, 
//md: if you want to have more constants added, open a feature request
//md: i mainly created this repo for my beloved `N_TAU = 6.2831...` constant :D 
//md: ## usage 

import {
    N_TAU, 
    N_PI
}
// from "https://deno.land/x/math/mod.js"
from "./mod.js"
console.log(`the assumption that tau is bigger than pi is (N_TAU > N_PI): ${N_TAU > N_PI}`);
//./readme.md:end