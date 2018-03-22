import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        assault_rifles: [],
        explosives: [],
        pistols: [],
        shotguns: [],
        snipers: [],
        submachines: []
      }
    }
    
    componentDidMount() {
      axios.get("https://cors-anywhere.herokuapp.com/www.fortnitechests.info/api/weapons", {
      }).then((res) => {
        // console.log(res.data);
        this.setState({ 
          assault_rifles: res.data.assault_rifles,
          explosives: res.data.explosives,
          pistols: res.data.pistols,
          shotguns: res.data.shotguns,
          snipers: res.data.snipers,
          submachines: res.data.submachines
        });
      });
    }

    render() {
      return (
          <React.Fragment>
            {this.state.explosives.map((explosive, i) => {
              return (
                <div key={i}>
                  { explosive.name ? <h4>{explosive.name}</h4> : null }
                  { explosive.damage ? <p>damage: {explosive.damage}</p> : null }
                  { explosive.dps ? <p>dps: {explosive.dps}</p> : null } 
                  { explosive.durability ? <p>durability: {explosive.durability}</p> : null } 
                  { explosive.firerate ? <p>firerate: {explosive.firerate}</p> : null }                   
                  { explosive.rarity ? <p className={explosive.rarity}>rarity: {explosive.rarity}</p> : null }
                  { explosive.range ? <p>range: {explosive.range}</p> : null } 
                  { explosive.magsize ? <p>magsize: {explosive.magsize}</p> : null } 
                  { explosive.impact ? <p>impact: {explosive.impact}</p> : null } 
                  { explosive.reloadtime ? <p>reloadtime: {explosive.reloadtime}</p> : null } 
                  { explosive.ammocost ? <p>ammocost: {explosive.ammocost}</p> : null } 
                </div>
              )
            })}

            {this.state.assault_rifles.map((assault_rifle, i) => {
                return (
                  <div key={i}>
                    {assault_rifle.name ? <h4>{assault_rifle.name}</h4> : null}
                    {assault_rifle.damage ? <p>damage: {assault_rifle.damage}</p> : null}
                    {assault_rifle.dps ? <p>dps: {assault_rifle.dps}</p> : null}
                    {assault_rifle.durability ? <p>durability: {assault_rifle.durability}</p> : null}
                    {assault_rifle.firerate ? <p>firerate: {assault_rifle.firerate}</p> : null}
                    {assault_rifle.rarity ? <p className={assault_rifle.rarity}>rarity: {assault_rifle.rarity}</p> : null}
                    {assault_rifle.range ? <p>range: {assault_rifle.range}</p> : null}
                    {assault_rifle.magsize ? <p>magsize: {assault_rifle.magsize}</p> : null}
                    {assault_rifle.impact ? <p>impact: {assault_rifle.impact}</p> : null}
                    {assault_rifle.reloadtime ? <p>reloadtime: {assault_rifle.reloadtime}</p> : null}
                    {assault_rifle.ammocost ? <p>ammocost: {assault_rifle.ammocost}</p> : null} 
                  </div>
                )
              })}

            {this.state.pistols.map((pistol, i) => {
                return (
                  <div key={i}>
                    {pistol.name ? <h4>{pistol.name}</h4> : null}
                    {pistol.damage ? <p>damage: {pistol.damage}</p> : null}
                    {pistol.dps ? <p>dps: {pistol.dps}</p> : null}
                    {pistol.durability ? <p>durability: {pistol.durability}</p> : null}
                    {pistol.firerate ? <p>firerate: {pistol.firerate}</p> : null}
                    {pistol.rarity ? <p className={pistol.rarity}>rarity: {pistol.rarity}</p> : null}   
                    {pistol.range ? <p>range: {pistol.range}</p> : null}
                    {pistol.magsize ? <p>magsize: {pistol.magsize}</p> : null}
                    {pistol.impact ? <p>impact: {pistol.impact}</p> : null}
                    {pistol.reloadtime ? <p>reloadtime: {pistol.reloadtime}</p> : null}
                    {pistol.ammocost ? <p>ammocost: {pistol.ammocost}</p> : null}
                  </div>
                )
              })}

            {this.state.shotguns.map((shotgun, i) => {
                return (
                  <div key={i}>
                    {shotgun.name ? <h4>{shotgun.name}</h4> : null}
                    {shotgun.damage ? <p>damage: {shotgun.damage}</p> : null}
                    {shotgun.dps ? <p>dps: {shotgun.dps}</p> : null}
                    {shotgun.durability ? <p>durability: {shotgun.durability}</p> : null}
                    {shotgun.firerate ? <p>firerate: {shotgun.firerate}</p> : null}
                    {shotgun.rarity ? <p className={shotgun.rarity}>rarity: {shotgun.rarity}</p> : null}
                    {shotgun.range ? <p>range: {shotgun.range}</p> : null}
                    {shotgun.magsize ? <p>magsize: {shotgun.magsize}</p> : null}
                    {shotgun.impact ? <p>impact: {shotgun.impact}</p> : null}
                    {shotgun.reloadtime ? <p>reloadtime: {shotgun.reloadtime}</p> : null}
                    {shotgun.ammocost ? <p>ammocost: {shotgun.ammocost}</p> : null}
                  </div>
                )
              })}

              {this.state.snipers.map((sniper, i) => {
                return (
                  <div key={i}>
                    {sniper.name ? <h4>{sniper.name}</h4> : null}
                    {sniper.damage ? <p>damage: {sniper.damage}</p> : null}
                    {sniper.dps ? <p>dps: {sniper.dps}</p> : null}
                    {sniper.durability ? <p>durability: {sniper.durability}</p> : null}
                    {sniper.firerate ? <p>firerate: {sniper.firerate}</p> : null}
                    {sniper.rarity ? <p className={sniper.rarity}>rarity: {sniper.rarity}</p> : null}
    
                    {sniper.range ? <p>range: {sniper.range}</p> : null}
                    {sniper.magsize ? <p>magsize: {sniper.magsize}</p> : null}
                    {sniper.impact ? <p>impact: {sniper.impact}</p> : null}
                    {sniper.reloadtime ? <p>reloadtime: {sniper.reloadtime}</p> : null}
                    {sniper.ammocost ? <p>ammocost: {sniper.ammocost}</p> : null}
                  </div>
                )
              })}

              {this.state.submachines.map((submachine, i) => {
                return (
                  <div key={i}>
                    {submachine.name ? <h4>{submachine.name}</h4> : null}
                    {submachine.damage ? <p>damage: {submachine.damage}</p> : null}
                    {submachine.dps ? <p>dps: {submachine.dps}</p> : null}
                    {submachine.durability ? <p>durability: {submachine.durability}</p> : null}
                    {submachine.firerate ? <p>firerate: {submachine.firerate}</p> : null}
                    {submachine.rarity ? <p className={submachine.rarity}>rarity: {submachine.rarity}</p> : null}
                    {submachine.range ? <p>range: {submachine.range}</p> : null}
                    {submachine.magsize ? <p>magsize: {submachine.magsize}</p> : null}
                    {submachine.impact ? <p>impact: {submachine.impact}</p> : null}
                    {submachine.reloadtime ? <p>reloadtime: {submachine.reloadtime}</p> : null}
                    {submachine.ammocost ? <p>ammocost: {submachine.ammocost}</p> : null}
                  </div>
                )
              })}
          </ React.Fragment>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
