import React, { useState, useRef, useEffect } from 'react';
import './Recipes.css';

export default function Recipes(){
  // Core form state
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [category, setCategory] = useState('Dinner');
  const [cuisine, setCuisine] = useState('Italian');
  const [customCuisine, setCustomCuisine] = useState('');
  const [showCustomCuisine, setShowCustomCuisine] = useState(false);
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState(4);
  const [ingredients, setIngredients] = useState(['2 cups of milk']);
  const [steps, setSteps] = useState(['Step 1: Boil the pasta for 8 minutes.']);
  const [images, setImages] = useState([]); // {file, url}
  const [difficulty, setDifficulty] = useState('Easy');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [nutrition, setNutrition] = useState({calories:'',protein:'',carbs:'',fat:''});
  const [visibility, setVisibility] = useState('Public');

  const [showSuccess, setShowSuccess] = useState(false);

  const fileRef = useRef(null);

  const categories = ['Breakfast','Lunch','Dinner','Snack','Dessert','Beverage'];
  const cuisines = ['Sri Lankan','Indian','Chinese','Italian','Japanese','Western','Other'];
  const difficulties = ['Easy','Medium','Hard'];

  // Simple validation
  function validate(){
    let ok = true;
    if(!title.trim()){ setTitleError('Title is required'); ok=false } else if(title.length>100){ setTitleError('Max 100 characters'); ok=false } else setTitleError('');
    if(!description.trim() || description.trim().length<20){ setDescriptionError('Description must be at least 20 characters'); ok=false } else setDescriptionError('');
    if(!category) ok=false;
    if(!cuisine) ok=false;
    if(ingredients.length<1) ok=false;
    if(steps.length<1) ok=false;
    if(images.length<1) ok=false;
    return ok;
  }

  function handlePublish(e){
    e.preventDefault();
    if(!validate()){
      window.scrollTo({top:100,behavior:'smooth'});
      return;
    }
    setShowSuccess(true);
    setTimeout(()=>setShowSuccess(false), 3200);
  }

  // Ingredients handlers
  function addIngredient(text=''){ setIngredients(prev=>[...prev, text || '']); }
  function updateIngredient(i, v){ setIngredients(prev=>prev.map((p,idx)=> idx===i? v : p)) }
  function removeIngredient(i){ setIngredients(prev=>prev.filter((_,idx)=>idx!==i)) }

  // Steps handlers
  function addStep(text=''){ setSteps(prev=>[...prev, text||'']); }
  function updateStep(i,v){ setSteps(prev=>prev.map((p,idx)=> idx===i? v : p)) }
  function removeStep(i){ setSteps(prev=>prev.filter((_,idx)=>idx!==i)) }

  // Tags
  function addTag(e){ e.preventDefault(); const t = tagInput.trim(); if(!t) return; if(!tags.includes(t)) setTags([...tags,t]); setTagInput(''); }
  // tags removal handled inline where needed

  // Images
  function onFiles(files){
    const arr = Array.from(files).slice(0,8).map(f=>({file:f,url:URL.createObjectURL(f)}));
    setImages(prev=>[...prev,...arr]);
  }
  function removeImage(i){
    URL.revokeObjectURL(images[i].url);
    setImages(prev=>prev.filter((_,idx)=>idx!==i));
  }

  // Custom cuisine visibility
  useEffect(()=>{ setShowCustomCuisine(cuisine==='Other') },[cuisine])

  // small Modal component
  function SuccessModal(){
    if(!showSuccess) return null;
    return (
      <div className="success-modal">
        <div className="success-card">
          <div className="emoji">🎉</div>
          <h4>Your recipe has been published!</h4>
          <p>Nice! Your recipe is now live — share it with your community.</p>
        </div>
      </div>
    )
  }

  // Reuse the custom select from earlier (kept simple)
  function CustomSelect({options, value, onChange, id}){
    const [open, setOpen] = useState(false);
    const idx = options.indexOf(value);
    const rootRef = useRef(null);

    useEffect(()=>{
      function onDoc(e){ if(rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); }
      document.addEventListener('click', onDoc); return ()=>document.removeEventListener('click', onDoc);
    },[])

    function toggle(){ setOpen(s=>!s); }
    function select(opt){ onChange(opt); setOpen(false); }

    return (
      <div className="custom-select" ref={rootRef} id={id} tabIndex={0}>
        <button type="button" className="custom-select__control" onClick={toggle} aria-haspopup="listbox" aria-expanded={open} aria-labelledby={`${id}-label`}>
          <span className="custom-select__value">{value}</span>
          <span className={`custom-select__arrow ${open ? 'open' : ''}`} aria-hidden>▾</span>
        </button>
        {open && (
          <ul role="listbox" className="custom-select__list" tabIndex={-1} aria-activedescendant={`${id}-opt-${idx}`}>
            {options.map((opt,i)=>(
              <li key={opt} id={`${id}-opt-${i}`} role="option" aria-selected={opt===value} className={`custom-select__option ${opt===value? 'selected':''}`} onClick={()=>select(opt)}>
                <span className="opt-label">{opt}</span>
                {opt===value && <span className="opt-tick">✓</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <div className="recipes-container">
      <div className="top-bar">
        <button className="back-btn" onClick={()=>window.history.back()}>←</button>
        <div className="top-title">➕ Add New Recipe</div>
      </div>

      <main className="recipes-page">
        <div className="centered">
          <section className="recipes-grid two-col">
            <form className="recipes-form" onSubmit={(e)=>e.preventDefault()}>
              {/* Basic */}
              <div className="section">
                <div className="section-title">Basic</div>
                <div className="field field--floating">
                  <input id="title" placeholder=" " value={title} onChange={e=>setTitle(e.target.value)} maxLength={100} />
                  <label htmlFor="title">Recipe Title <span className="note">(required)</span></label>
                  <div className="note small">e.g., Creamy Garlic Chicken Pasta</div>
                  {titleError && <div className="error">{titleError}</div>}
                </div>

                <div className="field field--floating textarea">
                  <textarea id="desc" placeholder=" " value={description} onChange={e=>setDescription(e.target.value)} rows={3} maxLength={600} />
                  <label htmlFor="desc">Short Description <span className="note">(min 20 chars)</span></label>
                  <div className="note small">A rich, creamy pasta infused with garlic and parmesan flavor.</div>
                  {descriptionError && <div className="error">{descriptionError}</div>}
                </div>
              </div>

              {/* Category */}
              <div className="section">
                <div className="section-title">Category</div>
                <div className="field-row">
                  <div className="field">
                    <label id="category-label">Category <span className="note">(required)</span></label>
                    <CustomSelect id="category" options={categories} value={category} onChange={setCategory} />
                  </div>

                  <div className="field">
                    <label id="cuisine-label">Cuisine <span className="note">(required)</span></label>
                    <CustomSelect id="cuisine" options={cuisines} value={cuisine} onChange={setCuisine} />
                    {showCustomCuisine && <input className="mt8" placeholder="Specify cuisine" value={customCuisine} onChange={e=>setCustomCuisine(e.target.value)} />}
                  </div>
                </div>
              </div>

              {/* Times & Servings */}
              <div className="section">
                <div className="section-title">Times & Servings</div>
                <div className="field-row">
                  <div className="field prep">
                    <label>Preparation Time</label>
                    <div className="icon-input"><span className="icon">🕒</span><input placeholder="e.g., 20 minutes" value={prepTime} onChange={e=>setPrepTime(e.target.value)} /></div>
                  </div>
                  <div className="field cook">
                    <label>Cooking Time</label>
                    <div className="icon-input"><span className="icon">🔥</span><input placeholder="e.g., 30 minutes" value={cookTime} onChange={e=>setCookTime(e.target.value)} /></div>
                  </div>
                  <div className="field servings">
                    <label>Servings</label>
                    <input type="number" min={1} value={servings} onChange={e=>setServings(Number(e.target.value)||1)} />
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="section">
                <div className="section-title">Ingredients</div>
                <div className="field">
                  <label>Ingredients <span className="note">(at least one)</span></label>
                  {ingredients.map((ing,i)=> (
                    <div className="chip-input" key={i}>
                      <input value={ing} onChange={e=>updateIngredient(i,e.target.value)} placeholder={`e.g., 2 cups of milk`} />
                      <button className="icon-btn" onClick={(e)=>{ e.preventDefault(); removeIngredient(i) }}>✕</button>
                    </div>
                  ))}
                  <div className="mt8"><button className="btn add-gradient" onClick={(e)=>{ e.preventDefault(); addIngredient('') }}>+ Add Ingredient</button></div>
                </div>
              </div>

              {/* Steps */}
              <div className="section">
                <div className="section-title">Steps</div>
                <div className="field">
                  <label>Cooking Steps <span className="note">(at least one)</span></label>
                  {steps.map((s,i)=> (
                    <details key={i} className="step-item" open>
                      <summary>Step {i+1}</summary>
                      <textarea value={s} onChange={e=>updateStep(i,e.target.value)} />
                      <div className="step-actions"><button className="icon-btn" onClick={(e)=>{ e.preventDefault(); removeStep(i) }}>Delete</button></div>
                    </details>
                  ))}
                  <div className="mt8"><button className="btn add-gradient" onClick={(e)=>{ e.preventDefault(); addStep('') }}>+ Add Step</button></div>
                </div>
              </div>

              {/* Images */}
              <div className="section">
                <div className="section-title">Images</div>
                <div className="field">
                  <label>Upload Recipe Images <span className="note">(at least one)</span></label>
                  <div className="upload-area" onClick={()=>fileRef.current.click()} onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>{ e.preventDefault(); onFiles(e.dataTransfer.files) }}>
                    <div className="upload-inner">📤 Drag & drop or click to upload</div>
                    <input ref={fileRef} type="file" multiple accept="image/*" style={{display:'none'}} onChange={e=>onFiles(e.target.files)} />
                  </div>
                  <div className="thumbs">
                    {images.map((img,i)=> (
                      <div key={i} className="thumb">
                        <img src={img.url} alt="preview" />
                        <button className="icon-btn small" onClick={(e)=>{ e.preventDefault(); removeImage(i) }}>✕</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Extras */}
              <div className="section">
                <div className="section-title">Extras</div>
                <div className="field-row">
                  <div className="field">
                    <label>Difficulty Level</label>
                    <CustomSelect id="diff" options={difficulties} value={difficulty} onChange={setDifficulty} />
                  </div>
                  <div className="field">
                    <label>Tags (Optional)</label>
                    <div className="tags-input">
                      <input value={tagInput} onChange={e=>setTagInput(e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter'){ addTag(e) } }} placeholder="e.g., spicy, quick meal" />
                      <button className="btn small" onClick={addTag}>Add</button>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Nutritional Info (Optional)</label>
                  <div className="nutri-row">
                    {['calories','protein','carbs','fat'].map(k=> (
                      <div className="nutri-card" key={k}>
                        <label>{k === 'calories' ? 'Calories (kcal)' : k.charAt(0).toUpperCase()+k.slice(1)+' (g)'}</label>
                        <input value={nutrition[k]} onChange={e=>setNutrition({...nutrition,[k]:e.target.value})} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>Visibility</label>
                  <div className="pill-radio">
                    {['Public','Private'].map(v=> (
                      <button key={v} className={`pill ${visibility===v?'active':''}`} onClick={(e)=>{ e.preventDefault(); setVisibility(v)}}>{v}</button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-actions bottom-actions">
                <button className="btn ghost small" onClick={()=>alert('Saved as draft')}>Save as Draft</button>
                <button className="btn add-gradient large" onClick={handlePublish}>Publish Recipe</button>
                <button className="reset" onClick={(e)=>{ e.preventDefault(); window.location.reload() }}>Reset Form</button>
              </div>
            </form>

            <aside className="recipes-preview">
              <div className="preview-card">
                <div className="preview-image" aria-hidden>{images[0] ? <img src={images[0].url} alt="main" /> : null}</div>
                <div className="preview-body">
                  <div className="preview-meta-row">
                    <span className="tag-pill">{category}</span>
                    <span className="difficulty">{difficulty}</span>
                  </div>
                  <h3>{title || 'Recipe Title'}</h3>
                  <p className="muted short-desc">{description || 'Short description will show here.'}</p>
                  <div className="meta-icons">
                    <span>🕒 {prepTime || '—'}</span>
                    <span>🔥 {cookTime || '—'}</span>
                    <span>👥 {servings}</span>
                  </div>
                  <div className="preview-chips">{tags.map(t=> <span className="chip" key={t}>{t}</span>)}</div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <SuccessModal />
    </div>
  )
}
