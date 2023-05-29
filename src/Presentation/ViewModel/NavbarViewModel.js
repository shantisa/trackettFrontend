import React from "react";
import { useState } from "react"

export default function NavbarViewModel(){
    const [isLoggedIn, setLogin] = useState(true);

    return{
        isLoggedIn
    }
}