body { margin:0; font-family:'Poppins',sans-serif; background:#0b0e14; color:#fff; padding-bottom:90px; text-align:center; }
/* BARRA SUPERIOR */
.navbar { display:flex; justify-content:space-between; align-items:center; padding:12px 20px; background:#0f141f; border-bottom:1px solid rgba(255,255,255,0.05); }
.nav-logo { height:35px; object-fit:contain; }
.menu-btn { font-size:24px; cursor:pointer; background:none; border:none; color:#fff; }
/* MENÚ DESPLEGABLE */
.nav-menu { display:none; flex-direction:column; background:#0f141f; padding:5px 20px; border-bottom:1px solid rgba(255,255,255,0.05); text-align:left; }
.nav-menu a { color:#fff; text-decoration:none; padding:10px 0; font-size:14px; opacity:0.8; }
/* BANNER DE FONDO LOGRADO DESDE TU CARPETA ASSETS */
.banner { width:100%; height:140px; background:linear-gradient(rgba(0,0,0,0.2),#0b0e14), url('assets/portada.png') no-repeat center center; background-size:cover; }
/* CONTENEDOR CENTRAL */
.app { max-width:400px; margin:-30px auto 20px auto; width:90%; background:rgba(20,26,38,0.95); border-radius:24px; padding:25px 20px; box-shadow:0 15px 35px rgba(0,0,0,0.6); box-sizing:border-box; }
.status { color:#00d95f; font-size:12px; font-weight:900; margin-bottom:15px; letter-spacing:1px; }
.song { font-size:15px; font-weight:600; margin-bottom:20px; color:#fff; }
.play { width:70px; height:70px; border-radius:50%; border:none; background:#00d95f; color:#fff; font-size:22px; cursor:pointer; box-shadow:0 8px 20px rgba(0,217,95,0.4); margin:0 auto; display:flex; justify-content:center; align-items:center; }
.volume { display:flex; align-items:center; gap:8px; margin-top:20px; font-size:12px; }
input[type=range] { flex:1; accent-color:#00d95f; cursor:pointer; }
/* HISTORIAL DE CANCIONES (WIDGET) */
.history { text-align:left; margin-top:25px; background:rgba(255,255,255,0.03); padding:15px; border-radius:15px; }
.history h3 { font-size:13px; margin:0 0 12px 0; color:#00d95f; text-transform:uppercase; }
.sonic_recent_tracks, table { width:100% !important; border-collapse:collapse; }
.sonic_recent_tracks td, tr { padding:8px 0; font-size:12px; border-bottom:1px solid rgba(255,255,255,0.05); color:rgba(255,255,255,0.8); }
/* REPRODUCTOR FLOTANTE INFERIOR */
.float-player { position:fixed; bottom:0; left:0; width:100%; background:#0f141f; padding:12px 20px; display:none; justify-content:space-between; align-items:center; box-sizing:border-box; z-index:999; border-top:1px solid rgba(255,255,255,0.05); }
.float-info { display:flex; align-items:center; gap:10px; max-width:70%; }
.float-img { width:35px; height:35px; object-fit:contain; }
.float-title { font-size:14px; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
/* BOTÓN WHATSAPP FLOTANTE */
.whatsapp-float { position:fixed; bottom:75px; right:20px; width:52px; height:52px; background:#25d366; border-radius:50%; display:flex; justify-content:center; align-items:center; box-shadow:0 4px 15px rgba(0,0,0,0.4); z-index:998; }
.whatsapp-float svg { width:26px; height:26px; fill:#fff; }
