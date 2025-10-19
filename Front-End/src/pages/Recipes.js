import React, { useState, useRef, useEffect } from 'react';
import './Recipes.css';

export default function Recipes(){
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');

  function addTag(e){
    e.preventDefault();
    const t = tagInput.trim();
    if(!t) return;
    if(!tags.includes(t)) setTags([...tags, t]);
    setTagInput('');
  }

  function removeTag(t){
    setTags(tags.filter(x => x !== t));
  }

  const categories = ['All','Breakfast','Lunch','Dinner','Dessert','Drinks'];

  function CustomSelect({options, value, onChange, id}){
    const [open, setOpen] = useState(false);
    const idx = options.indexOf(value);
    const rootRef = useRef(null);

    useEffect(()=>{
      function onDoc(e){
        if(rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
      }
      document.addEventListener('click', onDoc);
      return ()=>document.removeEventListener('click', onDoc);
    },[])

    function toggle(){ setOpen(s=>!s); }
    function select(opt){ onChange(opt); setOpen(false); }

    return (
      <div className="custom-select" ref={rootRef} id={id} tabIndex={0} onKeyDown={(e)=>{
        if(e.key==='ArrowDown' || e.key==='Enter'){ e.preventDefault(); setOpen(true); }
        if(e.key==='Escape'){ setOpen(false); }
      }}>
        <button type="button" className="custom-select__control" onClick={toggle} aria-haspopup="listbox" aria-expanded={open} aria-labelledby={`${id}-label`}>
          <span className="custom-select__value">{value}</span>
          <span className={`custom-select__arrow ${open ? 'open' : ''}`} aria-hidden>▾</span>
        </button>

        {open && (
          <ul role="listbox" className="custom-select__list" tabIndex={-1} aria-activedescendant={`${id}-opt-${idx}`}>
            {options.map((opt,i)=> (
              <li key={opt} id={`${id}-opt-${i}`} role="option" aria-selected={opt===value} className={`custom-select__option ${opt===value? 'selected':''}`} onClick={()=>select(opt)} onKeyDown={(e)=>{ if(e.key==='Enter') select(opt) }}>
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <main className="recipes-page">
      <section className="recipes-hero">
        <div className="recipes-hero__inner">
          <h2>Discover & Add Recipes</h2>
          <p className="muted">Search, filter, and preview recipes — create beautiful entries in seconds.</p>
        </div>
      </section>

      <section className="recipes-grid">
        <form className="recipes-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field-row">
            <div className="field">
              <label>Search</label>
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search recipes or ingredients" />
            </div>

            <div className="field">
              <label id="category-label">Category</label>
              <CustomSelect id="category" options={categories} value={category} onChange={setCategory} />
            </div>
          </div>

          <div className="field">
            <label>Recipe title</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g., Tuscan Tomato Pasta" />
          </div>

          <div className="field tags">
            <label>Add tags</label>
            <div className="tags-input">
              <input value={tagInput} onChange={e=>setTagInput(e.target.value)} placeholder="type tag then press Enter" onKeyDown={e=>{ if(e.key==='Enter'){addTag(e)} }} />
              <button className="btn small" onClick={addTag}>Add</button>
            </div>
            <div className="tag-list">
              {tags.map(t => (
                <span key={t} className="tag" onClick={()=>removeTag(t)}>{t} <small>×</small></span>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button className="btn primary" onClick={()=>alert('Pretend-saved: '+(title||'Untitled'))}>Save Recipe</button>
            <button className="btn ghost" onClick={()=>{setTitle(''); setTags([]); setQuery(''); setCategory('All')}}>Reset</button>
          </div>
        </form>

        <aside className="recipes-preview">
          <div className="preview-card">
            <div className="preview-image" aria-hidden></div>
            <div className="preview-body">
              <h3>{title || 'Recipe Preview'}</h3>
              <p className="small muted">{category} • {tags.length ? tags.join(', ') : 'No tags'}</p>
              <p className="preview-meta muted">Search: {query || '—'}</p>
              <div className="preview-chips">
                {tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
              <div className="cta-row">
                <button className="btn-ghost small">View</button>
                <button className="btn small">Share</button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
