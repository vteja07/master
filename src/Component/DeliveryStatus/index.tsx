import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  countBy?: number;
}

interface IState {
  count: number;
}


class DeliveryStatus extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
  };

  public state: IState = {
    count: 0,
  };

  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  };

  public render() {
    return (
      <GridContainer>
        <AddContainer> <button >+</button></AddContainer>
        <StatusContainer>
          <StatusImage>
            <div /><div/><div/><div/>
          </StatusImage>
          <div>Status: <span>DELIVERED</span></div>
          <div>Mode: <span>Individual</span></div>
          <div>Last Known Location : <span>NA</span></div>
          
        </StatusContainer>
        <StateContainer>
          <StateHeaderContainer>
            <StateHeaderTitle>Shipment ID: <span>SC10224605</span></StateHeaderTitle>
            <StateHeaderTitle>Servic Provider: <span></span></StateHeaderTitle>
          </StateHeaderContainer>

          <StateBodyContainer>
            <div>
              <StateHeaderTitle>Pick Up <span>abcdef</span></StateHeaderTitle>
            <StateHeaderTitle>Ship From: <span>TX</span></StateHeaderTitle></div>
            <div><StateHeaderTitle>Delivery <span>aaaaaaa</span></StateHeaderTitle>
            <StateHeaderTitle>Ship To: <span>TX</span></StateHeaderTitle></div>
          </StateBodyContainer>

        </StateContainer>
        <ItemContainer><div>Trailer: <span>NA</span></div>
          <div>Purchase Order Reference: <span>OC11137</span></div>
          </ItemContainer>
      </GridContainer>
    );
  }
}

export default DeliveryStatus;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr 3fr 1fr;
    grid-template-areas: "add status state item";
    padding: 20px;
    height: 20vh;
    width:90%;
    background:white;
    border:10px solid grey;
    color:black;
    font-size:0.6em;
`;

const AddContainer = styled.div`
    grid-area: add;
    width: 100px;
    text-align:top;
`;

const StatusContainer = styled.div`
    grid-area: status;
    div{
      text-align:left;
      font-weight:bold;
      span{
        color:#ff7600;
        text-align:right;
        font-weight:bold;
      }
    }
`;

const StateContainer = styled.div`
    grid-area: state;
`;

const ItemContainer = styled.div`
    grid-area: item;
    div{
      text-align:left;
      font-weight:bold;
      span{
        color:grey;
      }
    }
`;

const StateHeaderContainer = styled.div`
    border-bottom:1px solid grey;
    display: grid;
    grid-template-columns:  1fr  1fr;
    text-align:left;
    padding-bottom:6px;
    width:90%;
`;

const StateBodyContainer = styled.div`
    display: grid;
    grid-template-columns:  1fr  1fr;
    text-align:left;
    padding-bottom:6px;
    width:90%;
    padding-top:10px;
`;


const StateHeaderTitle = styled.div`
      text-align:left;
      color:#ff7600;
      font-weight:bold;
      span{
        color:grey;
        text-align:right;
      }
`;

const StatusImage =styled.div`
    display:flex;
    padding-bottom:10px;
    div{
      min-width: 23px;
      min-height: 10px;
      margin-right: 2px;
      background:grey;
    }
    div:nth-child(4) {
      background:#ff7600;
    }
`;
