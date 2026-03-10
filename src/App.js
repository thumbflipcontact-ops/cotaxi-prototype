import React, { useState } from "react";

const mockVehicles = [
  {
    id: 1,
    photo: null,
    brand: "Toyota Corolla 2024",
    price: 18500,
    sellerName: "Auto Elite Motors",
    phone: "+33 6 12 34 56 78",
    bankAccount: "FR76 3000 4000 0300 0001 2345 678",
    participants: [
      { id: 1, firstName: "Marcus", lastName: "Johnson", phone: "+33 6 11 22 33 44", amount: 5000 },
      { id: 2, firstName: "Priya", lastName: "Osei", phone: "+33 6 33 44 55 66", amount: 3700 },
      { id: 3, firstName: "David", lastName: "Caron", phone: "+33 6 55 66 77 88", amount: 4200 },
    ],
    daysLeft: 11,
    published: true,
  },
  {
    id: 2,
    photo: null,
    brand: "Honda Civic Hybrid 2024",
    price: 24000,
    sellerName: "GreenDrive Auto",
    phone: "+33 6 87 65 43 21",
    bankAccount: "FR76 1420 6600 0100 0420 1234 591",
    participants: [
      { id: 1, firstName: "Amara", lastName: "Diallo", phone: "+33 6 77 88 99 00", amount: 8000 },
      { id: 2, firstName: "Luc", lastName: "Bernard", phone: "+33 6 99 00 11 22", amount: 6000 },
    ],
    daysLeft: 16,
    published: true,
  },
];

const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l2-4h10l2 4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
    <circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>
    <path d="M5 9h14"/>
  </svg>
);

const PlusCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}>
    <path d="M20 12V22H4V12"/>
    <path d="M22 7H2v5h20V7z"/>
    <path d="M12 22V7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{width:12,height:12}}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

function formatMoney(amount) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(amount);
}

function getTotalContributed(vehicle) {
  return vehicle.participants.reduce((sum, p) => sum + p.amount, 0);
}

function getProgressPercent(vehicle) {
  return Math.min(100, (getTotalContributed(vehicle) / vehicle.price) * 100);
}

function getParticipantPercent(amount, totalPrice) {
  return ((amount / totalPrice) * 100).toFixed(1);
}

// CARTE VÉHICULE
function VehicleCard({ vehicle, onPress }) {
  const total = getTotalContributed(vehicle);
  const progress = getProgressPercent(vehicle);
  const remaining = vehicle.price - total;
  const spotsLeft = 12 - vehicle.participants.length;

  return (
    <div onClick={onPress} style={{
      background: "linear-gradient(145deg, #1a1f2e, #141822)",
      border: "1px solid rgba(255,200,60,0.12)",
      borderRadius: 20,
      padding: "18px 16px",
      marginBottom: 14,
      cursor: "pointer",
      transition: "all 0.2s",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,200,60,0.4),transparent)"}}/>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
        <div style={{flex:1}}>
          <div style={{
            display:"inline-flex",alignItems:"center",gap:4,
            background:"rgba(255,200,60,0.12)",borderRadius:6,
            padding:"2px 8px",marginBottom:6
          }}>
            <span style={{color:"#FFC83C",fontSize:10,fontWeight:700,letterSpacing:1}}>COTAXI+</span>
          </div>
          <div style={{color:"#fff",fontSize:16,fontWeight:700,letterSpacing:"-0.3px"}}>{vehicle.brand}</div>
          <div style={{color:"#8892a4",fontSize:12,marginTop:2}}>{vehicle.sellerName}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{color:"#FFC83C",fontSize:20,fontWeight:800}}>{formatMoney(vehicle.price)}</div>
          <div style={{display:"flex",alignItems:"center",gap:4,justifyContent:"flex-end",marginTop:3}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:vehicle.daysLeft <= 5?"#ff5e5e":"#4ade80"}}/>
            <span style={{color:"#8892a4",fontSize:11}}>{vehicle.daysLeft} j. restants</span>
          </div>
        </div>
      </div>

      <div style={{
        background:"linear-gradient(135deg,rgba(255,200,60,0.06),rgba(255,200,60,0.02))",
        borderRadius:12,padding:"16px",marginBottom:12,
        display:"flex",justifyContent:"center",alignItems:"center",
        border:"1px solid rgba(255,200,60,0.08)",height:80
      }}>
        <div style={{color:"rgba(255,200,60,0.4)",transform:"scale(3)"}}>
          <CarIcon/>
        </div>
      </div>

      <div style={{marginBottom:10}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
          <span style={{color:"#8892a4",fontSize:11}}>Collecté : <span style={{color:"#fff",fontWeight:600}}>{formatMoney(total)}</span></span>
          <span style={{color:"#8892a4",fontSize:11}}>Restant : <span style={{color:"#ff9f43",fontWeight:600}}>{formatMoney(remaining)}</span></span>
        </div>
        <div style={{background:"rgba(255,255,255,0.07)",borderRadius:99,height:6,overflow:"hidden"}}>
          <div style={{
            height:"100%",borderRadius:99,
            background:"linear-gradient(90deg,#FFC83C,#ff9f43)",
            width:`${progress}%`,
            transition:"width 0.6s ease"
          }}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:5}}>
          <span style={{color:"#FFC83C",fontSize:11,fontWeight:700}}>{progress.toFixed(0)}% financé</span>
          <span style={{color:"#8892a4",fontSize:11}}>{spotsLeft} place{spotsLeft!==1?"s":""} disponible{spotsLeft!==1?"s":""}</span>
        </div>
      </div>

      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex"}}>
          {vehicle.participants.slice(0,5).map((p,i)=>(
            <div key={p.id} style={{
              width:28,height:28,borderRadius:"50%",
              background:`hsl(${(i*60+30)%360},60%,45%)`,
              border:"2px solid #141822",
              display:"flex",alignItems:"center",justifyContent:"center",
              color:"#fff",fontSize:10,fontWeight:700,
              marginLeft: i===0?0:-8, zIndex:5-i
            }}>
              {p.firstName[0]}{p.lastName[0]}
            </div>
          ))}
          {vehicle.participants.length > 5 && (
            <div style={{
              width:28,height:28,borderRadius:"50%",
              background:"rgba(255,200,60,0.15)",border:"2px solid #141822",
              display:"flex",alignItems:"center",justifyContent:"center",
              color:"#FFC83C",fontSize:9,fontWeight:700,marginLeft:-8
            }}>+{vehicle.participants.length-5}</div>
          )}
        </div>
        <div style={{
          background:"linear-gradient(135deg,#FFC83C,#ff9f43)",
          borderRadius:10,padding:"7px 14px",
          color:"#0a0e17",fontSize:12,fontWeight:800
        }}>
          Participer →
        </div>
      </div>
    </div>
  );
}

// MODALE PARTICIPATION
function ParticipateModal({ vehicle, onClose, onSuccess }) {
  const [form, setForm] = useState({ firstName:"", lastName:"", phone:"", amount:"" });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const totalRaised = getTotalContributed(vehicle);
  const remaining = vehicle.price - totalRaised;
  const enteredAmt = parseFloat(form.amount) || 0;
  const percent = enteredAmt > 0 ? ((enteredAmt / vehicle.price) * 100).toFixed(1) : 0;
  const newRemaining = remaining - enteredAmt;

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Champ requis";
    if (!form.lastName.trim()) e.lastName = "Champ requis";
    if (!form.phone.trim()) e.phone = "Champ requis";
    if (!form.amount || enteredAmt <= 0) e.amount = "Entrez un montant valide";
    if (enteredAmt > remaining) e.amount = `Maximum : ${formatMoney(remaining)}`;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (step === 1 && validate()) setStep(2);
    else if (step === 2) onSuccess({ ...form, amount: enteredAmt });
  }

  const inputStyle = (err) => ({
    width:"100%",background:"rgba(255,255,255,0.05)",
    border: err ? "1.5px solid #ff5e5e" : "1.5px solid rgba(255,255,255,0.1)",
    borderRadius:12,padding:"12px 14px",color:"#fff",fontSize:14,
    outline:"none",boxSizing:"border-box",fontFamily:"inherit",
    transition:"border 0.2s"
  });

  return (
    <div style={{
      position:"absolute",inset:0,background:"rgba(0,0,0,0.7)",
      display:"flex",flexDirection:"column",justifyContent:"flex-end",
      zIndex:100,backdropFilter:"blur(4px)"
    }}>
      <div style={{
        background:"linear-gradient(170deg,#1a1f2e,#111520)",
        borderRadius:"24px 24px 0 0",
        padding:"0 0 32px",
        maxHeight:"88%",overflowY:"auto",
        border:"1px solid rgba(255,200,60,0.15)",
        borderBottom:"none"
      }}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 4px"}}>
          <div style={{width:40,height:4,background:"rgba(255,255,255,0.15)",borderRadius:99}}/>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 20px 16px"}}>
          <div>
            <div style={{color:"#FFC83C",fontSize:12,fontWeight:700,letterSpacing:1}}>COTAXI+</div>
            <div style={{color:"#fff",fontSize:18,fontWeight:800}}>Rejoindre la participation</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.08)",border:"none",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#8892a4"}}>
            <CloseIcon/>
          </button>
        </div>

        <div style={{margin:"0 20px 20px",background:"rgba(255,200,60,0.06)",border:"1px solid rgba(255,200,60,0.12)",borderRadius:14,padding:"12px 14px"}}>
          <div style={{color:"#fff",fontSize:14,fontWeight:700}}>{vehicle.brand}</div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
            <span style={{color:"#8892a4",fontSize:12}}>Prix total</span>
            <span style={{color:"#FFC83C",fontWeight:700,fontSize:14}}>{formatMoney(vehicle.price)}</span>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:2}}>
            <span style={{color:"#8892a4",fontSize:12}}>Montant restant</span>
            <span style={{color:"#ff9f43",fontWeight:700,fontSize:14}}>{formatMoney(remaining)}</span>
          </div>
        </div>

        {step === 1 ? (
          <div style={{padding:"0 20px"}}>
            <div style={{background:"rgba(255,158,67,0.08)",border:"1px solid rgba(255,158,67,0.2)",borderRadius:12,padding:"10px 12px",marginBottom:18,display:"flex",gap:8}}>
              <div style={{color:"#ff9f43",flexShrink:0,marginTop:2}}><ShieldIcon/></div>
              <div style={{color:"#ff9f43",fontSize:11,lineHeight:1.5}}>
                <span style={{fontWeight:700}}>TaxiPay ne collecte pas de fonds.</span> Les paiements sont effectués directement au vendeur par virement ou dépôt bancaire.
              </div>
            </div>

            {[
              {key:"firstName",label:"Prénom",placeholder:"Entrez votre prénom"},
              {key:"lastName",label:"Nom",placeholder:"Entrez votre nom"},
              {key:"phone",label:"Numéro de téléphone",placeholder:"+33 6 00 00 00 00"},
            ].map(f=>(
              <div key={f.key} style={{marginBottom:14}}>
                <label style={{color:"#8892a4",fontSize:12,fontWeight:600,letterSpacing:0.5,display:"block",marginBottom:6}}>{f.label}</label>
                <input
                  value={form[f.key]}
                  onChange={e=>setForm({...form,[f.key]:e.target.value})}
                  placeholder={f.placeholder}
                  style={inputStyle(errors[f.key])}
                />
                {errors[f.key] && <div style={{color:"#ff5e5e",fontSize:11,marginTop:4}}>{errors[f.key]}</div>}
              </div>
            ))}

            <div style={{marginBottom:14}}>
              <label style={{color:"#8892a4",fontSize:12,fontWeight:600,letterSpacing:0.5,display:"block",marginBottom:6}}>Montant de ma contribution (€)</label>
              <input
                type="number"
                value={form.amount}
                onChange={e=>setForm({...form,amount:e.target.value})}
                placeholder="0"
                style={inputStyle(errors.amount)}
              />
              {errors.amount && <div style={{color:"#ff5e5e",fontSize:11,marginTop:4}}>{errors.amount}</div>}
              {enteredAmt > 0 && (
                <div style={{marginTop:8,background:"rgba(255,200,60,0.06)",borderRadius:8,padding:"8px 10px",display:"flex",justifyContent:"space-between"}}>
                  <span style={{color:"#8892a4",fontSize:12}}>Votre part de propriété</span>
                  <span style={{color:"#FFC83C",fontWeight:700,fontSize:14}}>{percent}%</span>
                </div>
              )}
            </div>

            <button onClick={handleSubmit} style={{
              width:"100%",background:"linear-gradient(135deg,#FFC83C,#ff9f43)",
              border:"none",borderRadius:14,padding:"15px",
              color:"#0a0e17",fontSize:15,fontWeight:800,cursor:"pointer",
              letterSpacing:0.3,marginTop:4
            }}>
              Continuer →
            </button>
          </div>
        ) : (
          <div style={{padding:"0 20px"}}>
            <div style={{color:"#fff",fontSize:16,fontWeight:700,marginBottom:16}}>Confirmer votre participation</div>
            {[
              ["Nom complet", `${form.firstName} ${form.lastName}`],
              ["Téléphone", form.phone],
              ["Contribution", formatMoney(enteredAmt)],
              ["Part de propriété", `${percent}%`],
              ["Après votre apport", `${formatMoney(Math.max(0, newRemaining))} restant`],
            ].map(([label, value])=>(
              <div key={label} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <span style={{color:"#8892a4",fontSize:13}}>{label}</span>
                <span style={{color:"#fff",fontSize:13,fontWeight:600}}>{value}</span>
              </div>
            ))}
            <div style={{background:"rgba(255,94,94,0.07)",border:"1px solid rgba(255,94,94,0.15)",borderRadius:10,padding:"10px 12px",margin:"16px 0",fontSize:11,color:"#ff9f43",lineHeight:1.5}}>
              Cette participation est un engagement volontaire entre co-propriétaires. TaxiPay ne collecte aucun fonds et n'est pas impliqué dans les transactions financières.
            </div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setStep(1)} style={{flex:1,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,padding:"13px",color:"#fff",fontSize:14,fontWeight:600,cursor:"pointer"}}>
                Modifier
              </button>
              <button onClick={handleSubmit} style={{flex:2,background:"linear-gradient(135deg,#FFC83C,#ff9f43)",border:"none",borderRadius:12,padding:"13px",color:"#0a0e17",fontSize:14,fontWeight:800,cursor:"pointer"}}>
                Confirmer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// VUE PARTICIPANTS
function ParticipantsView({ vehicle }) {
  const totalRaised = getTotalContributed(vehicle);
  return (
    <div>
      <div style={{color:"#8892a4",fontSize:13,marginBottom:12}}>{vehicle.participants.length}/12 participants · {formatMoney(totalRaised)} collectés</div>
      {vehicle.participants.map((p, i) => {
        const pct = getParticipantPercent(p.amount, vehicle.price);
        return (
          <div key={p.id} style={{
            background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:14,padding:"14px 16px",marginBottom:10,
            display:"flex",alignItems:"center",gap:12
          }}>
            <div style={{
              width:42,height:42,borderRadius:"50%",flexShrink:0,
              background:`hsl(${(i*60+30)%360},60%,40%)`,
              display:"flex",alignItems:"center",justifyContent:"center",
              color:"#fff",fontSize:13,fontWeight:800,border:"2px solid rgba(255,255,255,0.1)"
            }}>
              {p.firstName[0]}{p.lastName[0]}
            </div>
            <div style={{flex:1}}>
              <div style={{color:"#fff",fontSize:14,fontWeight:700}}>{p.firstName} {p.lastName}</div>
              <div style={{color:"#8892a4",fontSize:12,marginTop:1}}>{p.phone}</div>
              <div style={{marginTop:6,background:"rgba(255,255,255,0.06)",borderRadius:99,height:4,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:99,background:"linear-gradient(90deg,#FFC83C,#ff9f43)",width:`${pct}%`}}/>
              </div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{color:"#FFC83C",fontSize:14,fontWeight:800}}>{formatMoney(p.amount)}</div>
              <div style={{color:"#8892a4",fontSize:11,marginTop:2}}>{pct}%</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// CERTIFICAT DE PARTICIPATION
function CertificateView({ vehicle }) {
  const [generated, setGenerated] = useState(false);
  const totalRaised = getTotalContributed(vehicle);
  const isFunded = totalRaised >= vehicle.price;

  return (
    <div>
      {!isFunded && (
        <div style={{background:"rgba(255,159,67,0.08)",border:"1px dashed rgba(255,159,67,0.25)",borderRadius:12,padding:"12px 14px",marginBottom:16,fontSize:12,color:"#ff9f43",lineHeight:1.6}}>
          Le certificat sera généré automatiquement dès que le montant total sera atteint. Il manque encore <strong>{formatMoney(vehicle.price - totalRaised)}</strong>.
        </div>
      )}

      <div style={{
        background:"linear-gradient(145deg,rgba(255,200,60,0.05),rgba(255,200,60,0.01))",
        border:"1.5px solid rgba(255,200,60,0.2)",borderRadius:16,padding:"20px",
        position:"relative",overflow:"hidden"
      }}>
        <div style={{position:"absolute",top:8,left:8,width:20,height:20,borderTop:"2px solid rgba(255,200,60,0.4)",borderLeft:"2px solid rgba(255,200,60,0.4)"}}/>
        <div style={{position:"absolute",top:8,right:8,width:20,height:20,borderTop:"2px solid rgba(255,200,60,0.4)",borderRight:"2px solid rgba(255,200,60,0.4)"}}/>
        <div style={{position:"absolute",bottom:8,left:8,width:20,height:20,borderBottom:"2px solid rgba(255,200,60,0.4)",borderLeft:"2px solid rgba(255,200,60,0.4)"}}/>
        <div style={{position:"absolute",bottom:8,right:8,width:20,height:20,borderBottom:"2px solid rgba(255,200,60,0.4)",borderRight:"2px solid rgba(255,200,60,0.4)"}}/>

        <div style={{textAlign:"center",marginBottom:16}}>
          <div style={{color:"#FFC83C",fontSize:11,letterSpacing:3,fontWeight:700,marginBottom:4}}>CERTIFICAT DE PARTICIPATION</div>
          <div style={{color:"#fff",fontSize:16,fontWeight:800}}>{vehicle.brand}</div>
          <div style={{color:"#8892a4",fontSize:12,marginTop:2}}>Émis via TaxiPay · Module Cotaxi+</div>
        </div>

        <div style={{background:"rgba(0,0,0,0.2)",borderRadius:10,padding:"12px",marginBottom:12}}>
          {[
            ["Véhicule", vehicle.brand],
            ["Prix total", formatMoney(vehicle.price)],
            ["Vendeur", vehicle.sellerName],
            ["Participants", `${vehicle.participants.length} co-propriétaires`],
            ["Total collecté", formatMoney(totalRaised)],
          ].map(([l,v])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
              <span style={{color:"#8892a4",fontSize:12}}>{l}</span>
              <span style={{color:"#fff",fontSize:12,fontWeight:600}}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{marginBottom:14}}>
          {vehicle.participants.map((p,i)=>(
            <div key={p.id} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:"#FFC83C",flexShrink:0}}/>
              <span style={{color:"#ccd1dc",fontSize:12,flex:1}}>{p.firstName} {p.lastName}</span>
              <span style={{color:"#FFC83C",fontSize:12,fontWeight:700}}>{formatMoney(p.amount)}</span>
              <span style={{color:"#8892a4",fontSize:11}}>({getParticipantPercent(p.amount,vehicle.price)}%)</span>
            </div>
          ))}
        </div>

        <div style={{background:"rgba(255,94,94,0.06)",border:"1px solid rgba(255,94,94,0.12)",borderRadius:8,padding:"10px 12px",fontSize:10,color:"#8892a4",lineHeight:1.6,marginBottom:14}}>
          Ce document est un engagement volontaire entre participants. <strong style={{color:"#ff9f43"}}>TaxiPay ne collecte aucun fonds et n'est pas impliqué dans les transactions financières.</strong>
        </div>

        <button
          onClick={() => setGenerated(true)}
          disabled={!isFunded}
          style={{
            width:"100%",
            background: isFunded ? "linear-gradient(135deg,#FFC83C,#ff9f43)" : "rgba(255,255,255,0.07)",
            border: isFunded ? "none" : "1px solid rgba(255,255,255,0.1)",
            borderRadius:12,padding:"13px",
            color: isFunded ? "#0a0e17" : "#4a5568",
            fontSize:14,fontWeight:800,cursor: isFunded ? "pointer" : "not-allowed",
            display:"flex",alignItems:"center",justifyContent:"center",gap:8
          }}
        >
          <FileTextIcon/>
          {generated ? "Certificat téléchargé ✓" : isFunded ? "Télécharger le certificat PDF" : "Financement incomplet"}
        </button>
      </div>
    </div>
  );
}

// VUE REVENUS
function RevenueView({ vehicle }) {
  const dailyRevenue = 45;
  const days = [
    { day: "Lun", revenue: 52 }, { day: "Mar", revenue: 48 }, { day: "Mer", revenue: 61 },
    { day: "Jeu", revenue: 39 }, { day: "Ven", revenue: 73 }, { day: "Sam", revenue: 85 }, { day: "Dim", revenue: 44 },
  ];
  const maxRev = Math.max(...days.map(d=>d.revenue));

  return (
    <div>
      <div style={{background:"linear-gradient(135deg,rgba(255,200,60,0.1),rgba(255,159,67,0.05))",border:"1px solid rgba(255,200,60,0.15)",borderRadius:16,padding:"16px",marginBottom:16}}>
        <div style={{color:"#8892a4",fontSize:12,marginBottom:4}}>Revenus du jour</div>
        <div style={{color:"#FFC83C",fontSize:32,fontWeight:800}}>{formatMoney(dailyRevenue)}</div>
        <div style={{color:"#4ade80",fontSize:12,marginTop:2}}>↑ 12% vs hier</div>
      </div>

      <div style={{marginBottom:18}}>
        <div style={{color:"#8892a4",fontSize:12,marginBottom:10}}>Revenus hebdomadaires</div>
        <div style={{display:"flex",alignItems:"flex-end",gap:6,height:80}}>
          {days.map(d=>(
            <div key={d.day} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
              <div style={{
                width:"100%",borderRadius:"4px 4px 0 0",
                background: d.day==="Ven"?"linear-gradient(#FFC83C,#ff9f43)":"rgba(255,200,60,0.2)",
                height: `${(d.revenue/maxRev)*64}px`,
                transition:"height 0.4s"
              }}/>
              <span style={{color:"#8892a4",fontSize:10}}>{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{color:"#8892a4",fontSize:12,marginBottom:10}}>Distributions du jour</div>
      {vehicle.participants.map((p, i) => {
        const pct = parseFloat(getParticipantPercent(p.amount, vehicle.price));
        const share = ((pct / 100) * dailyRevenue).toFixed(2);
        return (
          <div key={p.id} style={{
            display:"flex",alignItems:"center",gap:10,
            padding:"10px 14px",background:"rgba(255,255,255,0.04)",
            borderRadius:12,marginBottom:8,border:"1px solid rgba(255,255,255,0.06)"
          }}>
            <div style={{
              width:34,height:34,borderRadius:"50%",
              background:`hsl(${(i*60+30)%360},60%,40%)`,
              display:"flex",alignItems:"center",justifyContent:"center",
              color:"#fff",fontSize:11,fontWeight:700,flexShrink:0
            }}>
              {p.firstName[0]}{p.lastName[0]}
            </div>
            <div style={{flex:1}}>
              <div style={{color:"#fff",fontSize:13,fontWeight:600}}>{p.firstName} {p.lastName}</div>
              <div style={{color:"#8892a4",fontSize:11}}>{pct}% de propriété</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{color:"#4ade80",fontSize:14,fontWeight:700}}>+{share} €</div>
              <div style={{color:"#8892a4",fontSize:10}}>aujourd'hui</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// DÉTAIL VÉHICULE
function VehicleDetail({ vehicle, onBack, onParticipate }) {
  const [tab, setTab] = useState("apercu");
  const totalRaised = getTotalContributed(vehicle);
  const progress = getProgressPercent(vehicle);

  const tabs = [
    { id:"apercu", label:"Aperçu" },
    { id:"membres", label:"Membres" },
    { id:"certificat", label:"Certificat" },
    { id:"revenus", label:"Revenus" },
  ];

  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflowY:"auto"}}>
      <div style={{padding:"16px 20px 0",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onBack} style={{background:"rgba(255,255,255,0.08)",border:"none",borderRadius:10,width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",flexShrink:0}}>
          <BackIcon/>
        </button>
        <div>
          <div style={{color:"#FFC83C",fontSize:11,fontWeight:700,letterSpacing:1}}>COTAXI+</div>
          <div style={{color:"#fff",fontSize:16,fontWeight:800,lineHeight:1.2}}>{vehicle.brand}</div>
        </div>
      </div>

      <div style={{margin:"16px 20px",background:"linear-gradient(135deg,rgba(255,200,60,0.08),rgba(255,159,67,0.03))",border:"1px solid rgba(255,200,60,0.15)",borderRadius:20,padding:"20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:120,height:120,borderRadius:"50%",background:"radial-gradient(rgba(255,200,60,0.1),transparent)",pointerEvents:"none"}}/>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
          <div>
            <div style={{color:"#fff",fontSize:22,fontWeight:800}}>{formatMoney(vehicle.price)}</div>
            <div style={{color:"#8892a4",fontSize:12,marginTop:2}}>{vehicle.sellerName}</div>
          </div>
          <div style={{background:"rgba(255,200,60,0.12)",borderRadius:8,padding:"4px 10px",display:"flex",alignItems:"center",gap:4}}>
            <div style={{width:5,height:5,borderRadius:"50%",background:"#4ade80"}}/>
            <span style={{color:"#FFC83C",fontSize:11,fontWeight:700}}>{vehicle.daysLeft}j restants</span>
          </div>
        </div>

        <div style={{display:"flex",justifyContent:"center",margin:"4px 0 16px",opacity:0.5,transform:"scale(2.5)"}}>
          <CarIcon/>
        </div>

        <div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
            <span style={{color:"#8892a4",fontSize:12}}>Progression du financement</span>
            <span style={{color:"#FFC83C",fontSize:12,fontWeight:700}}>{progress.toFixed(0)}%</span>
          </div>
          <div style={{background:"rgba(255,255,255,0.08)",borderRadius:99,height:8,overflow:"hidden"}}>
            <div style={{height:"100%",borderRadius:99,background:"linear-gradient(90deg,#FFC83C,#ff9f43)",width:`${progress}%`}}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:5}}>
            <span style={{color:"#8892a4",fontSize:11}}>{formatMoney(totalRaised)} collectés</span>
            <span style={{color:"#ff9f43",fontSize:11}}>{formatMoney(vehicle.price - totalRaised)} restant</span>
          </div>
        </div>
      </div>

      <div style={{display:"flex",margin:"0 20px 16px",background:"rgba(255,255,255,0.05)",borderRadius:12,padding:4,gap:2}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            flex:1,background: tab===t.id ? "linear-gradient(135deg,#FFC83C,#ff9f43)" : "transparent",
            border:"none",borderRadius:9,padding:"7px 2px",
            color: tab===t.id ? "#0a0e17" : "#8892a4",
            fontSize:11,fontWeight: tab===t.id ? 800 : 500,
            cursor:"pointer",transition:"all 0.2s",whiteSpace:"nowrap"
          }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{flex:1,padding:"0 20px 20px"}}>
        {tab === "apercu" && (
          <div>
            <div style={{background:"rgba(255,200,60,0.06)",border:"1px solid rgba(255,200,60,0.12)",borderRadius:14,padding:"14px 16px",marginBottom:14}}>
              <div style={{color:"#FFC83C",fontSize:12,fontWeight:700,marginBottom:10}}>Informations vendeur</div>
              {[
                ["Vendeur", vehicle.sellerName],
                ["Téléphone", vehicle.phone],
                ["Compte bancaire", vehicle.bankAccount],
                ["Durée de participation", "18 jours"],
                ["Places restantes", `${12 - vehicle.participants.length} / 12`],
              ].map(([l,v])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                  <span style={{color:"#8892a4",fontSize:12}}>{l}</span>
                  <span style={{color:"#fff",fontSize:12,fontWeight:600,maxWidth:"55%",textAlign:"right",wordBreak:"break-all"}}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{background:"rgba(255,94,94,0.06)",border:"1px solid rgba(255,94,94,0.12)",borderRadius:12,padding:"12px 14px",marginBottom:16,display:"flex",gap:8}}>
              <div style={{color:"#ff9f43",flexShrink:0,marginTop:1}}><ShieldIcon/></div>
              <div style={{color:"#ff9f43",fontSize:11,lineHeight:1.6}}>
                <strong>TaxiPay ne collecte pas de fonds.</strong> Les paiements sont effectués directement au vendeur par virement ou dépôt bancaire.
              </div>
            </div>

            <button onClick={onParticipate} style={{
              width:"100%",background:"linear-gradient(135deg,#FFC83C,#ff9f43)",
              border:"none",borderRadius:14,padding:"16px",
              color:"#0a0e17",fontSize:16,fontWeight:800,cursor:"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",gap:8
            }}>
              <PlusCircleIcon/>
              Je participe
            </button>
          </div>
        )}
        {tab === "membres" && <ParticipantsView vehicle={vehicle}/>}
        {tab === "certificat" && <CertificateView vehicle={vehicle}/>}
        {tab === "revenus" && <RevenueView vehicle={vehicle}/>}
      </div>
    </div>
  );
}

// FORMULAIRE AJOUT VÉHICULE
function AddVehicleForm({ onClose, onSave }) {
  const [form, setForm] = useState({ brand:"", price:"", sellerName:"", phone:"", bankAccount:"" });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  function validate() {
    const e = {};
    if (!form.brand.trim()) e.brand = "Champ requis";
    if (!form.price || parseFloat(form.price) <= 0) e.price = "Entrez un prix valide";
    if (!form.sellerName.trim()) e.sellerName = "Champ requis";
    if (!form.phone.trim()) e.phone = "Champ requis";
    if (!form.bankAccount.trim()) e.bankAccount = "Champ requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (validate()) {
      onSave(form);
      setSaved(true);
      setTimeout(onClose, 1200);
    }
  }

  const inputStyle = (err) => ({
    width:"100%",background:"rgba(255,255,255,0.05)",
    border: err ? "1.5px solid #ff5e5e" : "1.5px solid rgba(255,255,255,0.1)",
    borderRadius:12,padding:"12px 14px",color:"#fff",fontSize:14,
    outline:"none",boxSizing:"border-box",fontFamily:"inherit"
  });

  return (
    <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.75)",display:"flex",flexDirection:"column",justifyContent:"flex-end",zIndex:100,backdropFilter:"blur(4px)"}}>
      <div style={{background:"linear-gradient(170deg,#1a1f2e,#111520)",borderRadius:"24px 24px 0 0",padding:"0 0 32px",maxHeight:"90%",overflowY:"auto",border:"1px solid rgba(255,200,60,0.15)",borderBottom:"none"}}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 4px"}}>
          <div style={{width:40,height:4,background:"rgba(255,255,255,0.15)",borderRadius:99}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 20px 16px"}}>
          <div>
            <div style={{color:"#FFC83C",fontSize:12,fontWeight:700,letterSpacing:1}}>ADMIN</div>
            <div style={{color:"#fff",fontSize:18,fontWeight:800}}>Publier un véhicule</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.08)",border:"none",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#8892a4"}}>
            <CloseIcon/>
          </button>
        </div>

        <div style={{padding:"0 20px"}}>
          <div style={{background:"rgba(255,200,60,0.04)",border:"2px dashed rgba(255,200,60,0.2)",borderRadius:14,padding:"24px",textAlign:"center",marginBottom:18,cursor:"pointer"}}>
            <div style={{color:"rgba(255,200,60,0.4)",fontSize:32,marginBottom:8}}>📷</div>
            <div style={{color:"#8892a4",fontSize:13}}>Appuyez pour ajouter une photo du véhicule</div>
          </div>

          {[
            {key:"brand",label:"Marque & Modèle",placeholder:"ex. Toyota Corolla 2024"},
            {key:"price",label:"Prix du véhicule (€)",placeholder:"ex. 18500",type:"number"},
            {key:"sellerName",label:"Nom du vendeur / concessionnaire",placeholder:"Nom du concessionnaire"},
            {key:"phone",label:"Numéro de téléphone",placeholder:"+33 6 00 00 00 00"},
            {key:"bankAccount",label:"Numéro de compte bancaire",placeholder:"IBAN ou numéro de compte"},
          ].map(f=>(
            <div key={f.key} style={{marginBottom:14}}>
              <label style={{color:"#8892a4",fontSize:12,fontWeight:600,letterSpacing:0.5,display:"block",marginBottom:6}}>{f.label}</label>
              <input
                type={f.type||"text"}
                value={form[f.key]}
                onChange={e=>setForm({...form,[f.key]:e.target.value})}
                placeholder={f.placeholder}
                style={inputStyle(errors[f.key])}
              />
              {errors[f.key] && <div style={{color:"#ff5e5e",fontSize:11,marginTop:4}}>{errors[f.key]}</div>}
            </div>
          ))}

          <div style={{background:"rgba(255,159,67,0.07)",border:"1px solid rgba(255,159,67,0.15)",borderRadius:10,padding:"10px 12px",marginBottom:18,display:"flex",gap:8}}>
            <div style={{color:"#ff9f43",flexShrink:0}}><ShieldIcon/></div>
            <div style={{color:"#ff9f43",fontSize:11,lineHeight:1.5}}>
              <strong>TaxiPay ne collecte pas de fonds.</strong> Les paiements sont effectués directement au vendeur par virement ou dépôt bancaire.
            </div>
          </div>

          <button onClick={handleSave} style={{
            width:"100%",background: saved ? "rgba(74,222,128,0.2)" : "linear-gradient(135deg,#FFC83C,#ff9f43)",
            border: saved ? "1px solid rgba(74,222,128,0.3)" : "none",
            borderRadius:14,padding:"15px",
            color: saved ? "#4ade80" : "#0a0e17",
            fontSize:15,fontWeight:800,cursor:"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",gap:8
          }}>
            {saved ? <><CheckIcon/> Publié !</> : "Publier le véhicule"}
          </button>
        </div>
      </div>
    </div>
  );
}

// MODALE SUCCÈS
function SuccessModal({ participant, vehicle, onClose }) {
  const pct = ((participant.amount / vehicle.price) * 100).toFixed(1);
  return (
    <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:20}}>
      <div style={{background:"linear-gradient(145deg,#1a1f2e,#111520)",border:"1px solid rgba(255,200,60,0.25)",borderRadius:24,padding:28,textAlign:"center",width:"100%",maxWidth:320,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,transparent,#FFC83C,transparent)"}}/>

        <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,rgba(255,200,60,0.2),rgba(255,159,67,0.1))",border:"2px solid rgba(255,200,60,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:28}}>
          🎉
        </div>

        <div style={{color:"#FFC83C",fontSize:12,letterSpacing:2,fontWeight:700,marginBottom:4}}>SUCCÈS</div>
        <div style={{color:"#fff",fontSize:20,fontWeight:800,marginBottom:6}}>Vous êtes dedans !</div>
        <div style={{color:"#8892a4",fontSize:13,marginBottom:20,lineHeight:1.5}}>
          {participant.firstName}, vous possédez désormais <strong style={{color:"#FFC83C"}}>{pct}%</strong> de la {vehicle.brand}
        </div>

        <div style={{background:"rgba(255,255,255,0.04)",borderRadius:12,padding:"12px 16px",marginBottom:20}}>
          {[
            ["Contribution", formatMoney(participant.amount)],
            ["Part de propriété", `${pct}%`],
            ["Véhicule", vehicle.brand],
          ].map(([l,v])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
              <span style={{color:"#8892a4",fontSize:12}}>{l}</span>
              <span style={{color:"#fff",fontSize:12,fontWeight:700}}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{background:"rgba(255,94,94,0.06)",border:"1px solid rgba(255,94,94,0.1)",borderRadius:10,padding:"8px 10px",marginBottom:16,fontSize:10,color:"#8892a4",lineHeight:1.5}}>
          Ceci est un engagement volontaire. TaxiPay ne collecte pas de fonds et n'est pas impliqué dans les transactions financières.
        </div>

        <button onClick={onClose} style={{width:"100%",background:"linear-gradient(135deg,#FFC83C,#ff9f43)",border:"none",borderRadius:12,padding:"13px",color:"#0a0e17",fontSize:14,fontWeight:800,cursor:"pointer"}}>
          Voir ma participation
        </button>
      </div>
    </div>
  );
}

// PAGE D'ACCUEIL
function HomePage({ vehicles, onVehiclePress, onCotaxiPlus }) {
  return (
    <div style={{flex:1,overflowY:"auto"}}>
      <div style={{padding:"20px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div>
          <div style={{color:"#8892a4",fontSize:13}}>Bonjour</div>
          <div style={{color:"#fff",fontSize:22,fontWeight:800,letterSpacing:"-0.5px"}}>Marcus Johnson</div>
          <div style={{display:"flex",alignItems:"center",gap:4,marginTop:4}}>
            {[...Array(5)].map((_,i)=><StarIcon key={i}/>)}
            <span style={{color:"#8892a4",fontSize:11,marginLeft:2}}>Chauffeur · 4,9</span>
          </div>
        </div>
        <div style={{width:44,height:44,borderRadius:"50%",background:"linear-gradient(135deg,#FFC83C,#ff9f43)",display:"flex",alignItems:"center",justifyContent:"center",color:"#0a0e17",fontWeight:800,fontSize:16}}>
          MJ
        </div>
      </div>

      <div style={{margin:"20px 20px 0",background:"linear-gradient(135deg,#FFC83C,#ff9f43,#ff8c42)",borderRadius:20,padding:"20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-20,right:-20,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.1)"}}/>
        <div style={{position:"absolute",bottom:-30,right:30,width:70,height:70,borderRadius:"50%",background:"rgba(255,255,255,0.07)"}}/>
        <div style={{color:"rgba(0,0,0,0.6)",fontSize:12,fontWeight:600,marginBottom:4}}>Solde TaxiPay</div>
        <div style={{color:"#0a0e17",fontSize:32,fontWeight:900,letterSpacing:"-1px"}}>2 847,50 €</div>
        <div style={{color:"rgba(0,0,0,0.5)",fontSize:12,marginTop:4}}>+52,00 € aujourd'hui</div>
      </div>

      <div style={{margin:"18px 20px 0",background:"linear-gradient(135deg,rgba(255,200,60,0.1),rgba(255,200,60,0.03))",border:"1.5px solid rgba(255,200,60,0.25)",borderRadius:18,padding:"16px 18px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"}} onClick={onCotaxiPlus}>
        <div style={{
          width:52,height:52,borderRadius:16,
          background:"linear-gradient(135deg,#FFC83C,#ff9f43)",
          display:"flex",alignItems:"center",justifyContent:"center",
          color:"#0a0e17",fontSize:26,fontWeight:900,flexShrink:0,
          boxShadow:"0 4px 20px rgba(255,200,60,0.3)"
        }}>
          +
        </div>
        <div style={{flex:1}}>
          <div style={{color:"#FFC83C",fontSize:16,fontWeight:800}}>Cotaxi+</div>
          <div style={{color:"#8892a4",fontSize:12,marginTop:2,lineHeight:1.4}}>Co-achetez des véhicules avec d'autres chauffeurs et clients</div>
        </div>
        <div style={{color:"#FFC83C",fontSize:20,opacity:0.6}}>›</div>
      </div>

      <div style={{margin:"22px 20px 8px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{color:"#fff",fontSize:16,fontWeight:700}}>Annonces actives</div>
        <div style={{color:"#FFC83C",fontSize:12,fontWeight:600}}>{vehicles.length} véhicules</div>
      </div>

      <div style={{padding:"0 20px 20px"}}>
        {vehicles.map(v=>(
          <VehicleCard key={v.id} vehicle={v} onPress={()=>onVehiclePress(v)}/>
        ))}
      </div>
    </div>
  );
}

// PAGE LISTING COTAXI+
function CotaxiListingPage({ vehicles, onVehiclePress, onBack, onAddVehicle }) {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflowY:"auto"}}>
      <div style={{padding:"20px 20px 0",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onBack} style={{background:"rgba(255,255,255,0.08)",border:"none",borderRadius:10,width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",flexShrink:0}}>
          <BackIcon/>
        </button>
        <div style={{flex:1}}>
          <div style={{color:"#FFC83C",fontSize:11,fontWeight:700,letterSpacing:1}}>MODULE</div>
          <div style={{color:"#fff",fontSize:18,fontWeight:800}}>Cotaxi+</div>
        </div>
        <button onClick={onAddVehicle} style={{background:"linear-gradient(135deg,#FFC83C,#ff9f43)",border:"none",borderRadius:10,padding:"8px 14px",display:"flex",alignItems:"center",gap:6,cursor:"pointer",color:"#0a0e17",fontSize:12,fontWeight:700}}>
          <span style={{fontSize:16,lineHeight:1}}>+</span> Ajouter
        </button>
      </div>

      <div style={{margin:"16px 20px",background:"rgba(255,200,60,0.06)",border:"1px solid rgba(255,200,60,0.12)",borderRadius:14,padding:"12px 14px",display:"flex",gap:10}}>
        <div style={{color:"#FFC83C"}}><UsersIcon/></div>
        <div>
          <div style={{color:"#fff",fontSize:13,fontWeight:600}}>Co-propriété de véhicules</div>
          <div style={{color:"#8892a4",fontSize:11,marginTop:2,lineHeight:1.5}}>Mutualisez vos ressources avec jusqu'à 12 personnes pour acquérir un véhicule. Partagez les coûts et les revenus en toute transparence.</div>
        </div>
      </div>

      <div style={{display:"flex",margin:"0 20px 14px",gap:10}}>
        {[
          {icon:"🚗",label:"Actifs",value:`${vehicles.length}`},
          {icon:"👥",label:"Co-propriétaires",value:"5"},
          {icon:"💰",label:"Financé",value:"67%"},
        ].map(s=>(
          <div key={s.label} style={{flex:1,background:"rgba(255,255,255,0.04)",borderRadius:12,padding:"10px 8px",textAlign:"center",border:"1px solid rgba(255,255,255,0.07)"}}>
            <div style={{fontSize:16,marginBottom:3}}>{s.icon}</div>
            <div style={{color:"#fff",fontSize:14,fontWeight:800}}>{s.value}</div>
            <div style={{color:"#8892a4",fontSize:10}}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{padding:"0 20px 20px"}}>
        {vehicles.map(v=>(
          <VehicleCard key={v.id} vehicle={v} onPress={()=>onVehiclePress(v)}/>
        ))}
      </div>
    </div>
  );
}

// APPLICATION PRINCIPALE
export default function App() {
  const [screen, setScreen] = useState("home");
  const [vehicles, setVehicles] = useState(mockVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showParticipate, setShowParticipate] = useState(false);
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [activeTab, setActiveTab] = useState("home");

  function handleVehiclePress(v) {
    setSelectedVehicle(v);
    setScreen("detail");
  }

  function handleParticipateSuccess(formData) {
    setVehicles(prev => prev.map(v => {
      if (v.id === selectedVehicle.id) {
        const updated = {
          ...v,
          participants: [...v.participants, {
            id: Date.now(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            amount: formData.amount
          }]
        };
        setSelectedVehicle(updated);
        return updated;
      }
      return v;
    }));
    setShowParticipate(false);
    setSuccessData(formData);
  }

  function handleAddVehicle(form) {
    const newV = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price),
      photo: null,
      participants: [],
      daysLeft: 18,
      published: true
    };
    setVehicles(prev=>[...prev, newV]);
  }

  return (
    <div style={{
      display:"flex",justifyContent:"center",alignItems:"center",
      minHeight:"100vh",background:"#0a0e17",
      fontFamily:"'DM Sans', 'Segoe UI', system-ui, sans-serif"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      <div style={{
        width:390,height:844,background:"#0d1120",
        borderRadius:44,overflow:"hidden",position:"relative",
        border:"1px solid rgba(255,255,255,0.1)",
        boxShadow:"0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
        display:"flex",flexDirection:"column"
      }}>
        {/* Barre de statut */}
        <div style={{height:44,background:"#0d1120",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 28px",flexShrink:0}}>
          <span style={{color:"#fff",fontSize:14,fontWeight:700}}>9:41</span>
          <div style={{width:120,height:28,background:"#000",borderRadius:99,position:"absolute",left:"50%",transform:"translateX(-50%)",top:6}}/>
          <div style={{display:"flex",gap:5,alignItems:"center"}}>
            <div style={{color:"#fff",fontSize:11,opacity:0.9}}>●●●●</div>
            <div style={{color:"#fff",fontSize:10,opacity:0.9}}>WiFi</div>
            <div style={{color:"#fff",fontSize:10,opacity:0.9}}>100%</div>
          </div>
        </div>

        <div style={{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",position:"relative"}}>
          {screen === "home" && (
            <HomePage
              vehicles={vehicles}
              onVehiclePress={handleVehiclePress}
              onCotaxiPlus={()=>setScreen("cotaxi")}
            />
          )}
          {screen === "cotaxi" && (
            <CotaxiListingPage
              vehicles={vehicles}
              onVehiclePress={handleVehiclePress}
              onBack={()=>setScreen("home")}
              onAddVehicle={()=>setShowAddVehicle(true)}
            />
          )}
          {screen === "detail" && selectedVehicle && (
            <VehicleDetail
              vehicle={selectedVehicle}
              onBack={()=>setScreen("cotaxi")}
              onParticipate={()=>setShowParticipate(true)}
            />
          )}

          {showParticipate && selectedVehicle && (
            <ParticipateModal
              vehicle={selectedVehicle}
              onClose={()=>setShowParticipate(false)}
              onSuccess={handleParticipateSuccess}
            />
          )}
          {showAddVehicle && (
            <AddVehicleForm
              onClose={()=>setShowAddVehicle(false)}
              onSave={handleAddVehicle}
            />
          )}
          {successData && selectedVehicle && (
            <SuccessModal
              participant={successData}
              vehicle={selectedVehicle}
              onClose={()=>setSuccessData(null)}
            />
          )}
        </div>

        {/* Barre de navigation */}
        <div style={{
          height:80,background:"rgba(13,17,32,0.97)",
          borderTop:"1px solid rgba(255,255,255,0.07)",
          display:"flex",alignItems:"center",justifyContent:"space-around",
          padding:"0 10px 16px",flexShrink:0
        }}>
          {[
            {id:"home",icon:<HomeIcon/>,label:"Accueil"},
            {id:"cotaxi",icon:<div style={{fontSize:18,fontWeight:900,lineHeight:1}}>+</div>,label:"Cotaxi+",special:true},
            {id:"wallet",icon:<WalletIcon/>,label:"Portefeuille"},
            {id:"trips",icon:<ChartIcon/>,label:"Trajets"},
          ].map(item=>(
            <button key={item.id} onClick={()=>{
              setActiveTab(item.id);
              if(item.id==="home") setScreen("home");
              else if(item.id==="cotaxi") setScreen("cotaxi");
            }} style={{
              display:"flex",flexDirection:"column",alignItems:"center",gap:4,
              background:"none",border:"none",cursor:"pointer",padding:"6px 12px",
              borderRadius:12,transition:"all 0.2s",flex:1
            }}>
              {item.special ? (
                <div style={{
                  width:48,height:48,borderRadius:16,
                  background: activeTab===item.id || screen==="cotaxi"
                    ? "linear-gradient(135deg,#FFC83C,#ff9f43)"
                    : "rgba(255,200,60,0.15)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  color: activeTab===item.id || screen==="cotaxi" ? "#0a0e17" : "#FFC83C",
                  boxShadow: activeTab===item.id || screen==="cotaxi" ? "0 4px 16px rgba(255,200,60,0.35)" : "none",
                  fontSize:24,fontWeight:900,marginTop:-20,
                  border: "2px solid " + (activeTab===item.id || screen==="cotaxi" ? "transparent" : "rgba(255,200,60,0.25)")
                }}>
                  {item.icon}
                </div>
              ) : (
                <div style={{color: activeTab===item.id ? "#FFC83C" : "#4a5568"}}>
                  {item.icon}
                </div>
              )}
              <span style={{
                fontSize:10,fontWeight:600,
                color: item.special
                  ? (activeTab===item.id||screen==="cotaxi" ? "#FFC83C" : "#6b7280")
                  : (activeTab===item.id ? "#FFC83C" : "#4a5568")
              }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
