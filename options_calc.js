function N(x)
			{
				var k, y, gamma;
				if (x==0) return 0.5;
				else
				{
					if (x>0)
					{
						with (Math)
						{
							gamma=0.2316419;
							k=1/(1+gamma*x);
							y=1-((1/sqrt(2*PI))*exp(-x*x*0.5)*(k*0.319381530+k*k*(-0.356563782)+
							k*k*k*1.781477937+k*k*k*k*(-1.821255978)+k*k*k*k*k*1.330274429));
						}
						return y;
					}
					else
					{
						y=1-N(-x); 
						return y;
					}
				}


			}

function BScall(S, X,  sigma, q,  r,  Tdays)
	{
		var c, d1, d2, T;
		T = Tdays/365;
		with(Math)
		{
			d1=(log(S/X)+(r-q+sigma*sigma/2)*T)/(sigma*sqrt(T));
			d2=(log(S/X)+(r-q-sigma*sigma/2)*T)/(sigma*sqrt(T));
			c = exp(-q*T)* S*N(d1)-exp(-r*T)*X*N(d2);
		}
		return c;
	}

function BSput(S, X,  sigma, q,  r,  Tdays)
	{
		var c, d1, d2, T;
		T = Tdays/365;
		with(Math)
		{
			d1=(log(S/X)+(r-q+sigma*sigma/2)*T)/(sigma*sqrt(T));
			d2=(log(S/X)+(r-q-sigma*sigma/2)*T)/(sigma*sqrt(T));
			p= exp(-r*T)* X*N(-d2)-exp(-q*T)*S*N(-d1);
		}
		return p;
	}

function calcBSCallOptionPrice(form)
	{
		var S=form.STOCK_PR.value / 1;
		var r=form.INTEREST_RATE.value / 1;
		var sigma=form.VOLATILITY.value / 1;
		var Tdays=form.DAYS.value / 1;
		var X=form.STRIKE_PR.value / 1;
		var Q=form.DIVIDENTS.value / 1;
			
		var BSEurCallPrice=BScall(S, X,  sigma, Q,  r,  Tdays);
		

		form.BSEURCALLPRICE.value = BSEurCallPrice;
	
	}

function calcBSPutOptionPrice(form)
	{
		var S=form.STOCK_PR.value / 1;
		var r=form.INTEREST_RATE.value / 1;
		var sigma=form.VOLATILITY.value / 1;
		var Tdays=form.DAYS.value / 1;
		var X=form.STRIKE_PR.value / 1;
		var Q=form.DIVIDENTS.value / 1;
			
		
		var BSEurPutPrice=BSput(S, X,  sigma, Q,  r,  Tdays);

		
		form.BSEURPUTPRICE.value = BSEurPutPrice;
	}