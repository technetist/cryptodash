import React from 'react';
import ReactHighcharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import HighchartsTheme from './HighchartsTheme';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function () {
  return (
    <AppContext.Consumer>
      {({historical}) =>
        <Tile>
          { historical ?
            <ReactHighcharts config={highchartsConfig(historical)}/>
            : <div>Loading Chart</div>
          }
        </Tile>
      }
    </AppContext.Consumer>
  )
}
