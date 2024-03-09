import React, { useEffect, useState } from "react";


export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="logo-parent">
                    <div className="logo">
                        <b className="q" ><i class="fa-solid fa-house"></i></b>
                    </div>
                    <div className="home-parent">

                        <div className="file-pdf"><i class="fa-solid fa-location-crosshairs"></i></div>



                        <div className="messages1"><i class="fa-solid fa-cloud"></i></div>


                        <div className="file-pdf"><i class="fa-solid fa-cloud-bolt"></i></div>

                <div className="gear"><i class="fa-solid fa-gear"></i></div>
                    </div>
                </div>

                        <div className="gear"><i class="fa-solid fa-right-from-bracket"></i></div>
            </div>

        </>
    )

}