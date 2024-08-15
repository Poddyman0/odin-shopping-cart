import { describe, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NavBar from './components/Navbar'
import ShopCard from './components/shopcard'
import ShopPage from './components/shoppage';
import ShoppingCart from './components/shoppingcart'
import WelcomePage from './components/welcomepage'
import HomePage from './components/homepage'
import CartItem from './components/cartitem'
import ControlledCarousel from './components/carousel'

describe('NavBar Component', () => {
    test('Navbar links point to correct destinations', () => {
      render(
        <BrowserRouter>
          <NavBar cartCount={3} />
        </BrowserRouter>
      );
  
      const shopPageLink = screen.getByText('Shop Page');
      expect(shopPageLink).toHaveAttribute('href', '/shoppage');
  
      const homepageLink = screen.getByText('Homepage');
      expect(homepageLink).toHaveAttribute('href', '/homepage');
  
      const shopLink = screen.getByText('Shop');
      expect(shopLink).toHaveAttribute('href', '/shoppage');
  
      const cartLink = screen.getByText('Cart');
      expect(cartLink).toHaveAttribute('href', '/shopcart');
    });
  
    test('Cart count is displayed correctly', () => {
      render(
        <BrowserRouter>
          <NavBar cartCount={5} />
        </BrowserRouter>
      );
  
      const cartAmount = screen.getByText('5 items');
      expect(cartAmount).toBeInTheDocument();
    });
})


  describe('WelcomePage Component', () => {
    test('welcome page content is displayed', () => {
        render(
            <BrowserRouter>
              <WelcomePage />
            </BrowserRouter>
          );

          const welcomeMessage = screen.getByTestId("welcome-message-test");
          expect(welcomeMessage).toHaveTextContent('Welcome to our shop!');
    })
  })

  describe('ShoppingCart and CartItem Component', () => {
    const cartItems = [
      { id: 1, image: 'pic1', title: 'Item 1', price: 10, amount: 1 },
      { id: 2, image: 'pic2', title: 'Item 2', price: 15, amount: 2 },
    ];
  
    test('Total cart bill amount is calculated correctly', () => {
      render(
        <BrowserRouter>
            <ShoppingCart cartItems={cartItems} />
        </BrowserRouter>);
        const totalAmountNum = screen.getByTestId('cart-total-num')
        expect(totalAmountNum).toHaveTextContent('£40')
    });


    test('CartItem component is rendered for each item in the ShoppingCart and content of each cartitem is rendered correctly', () => {
      render(        
        <BrowserRouter>
            <ShoppingCart cartItems={cartItems} />
        </BrowserRouter>);
      const cartItemElements = screen.getAllByTestId('cart-item');
      expect(cartItemElements.length).toBe(cartItems.length);


      const cartItemElementsTitles = screen.getAllByTestId('cart-item-test-title');
      expect(cartItemElementsTitles[0]).toHaveTextContent("Item 1")
      const cartItemElementsPic = screen.getAllByTestId('cart-item-test-image')
      expect(cartItemElementsPic[0]).toHaveAttribute('src', 'pic1')
      const cartItemElementsPrice = screen.getAllByTestId('cart-item-test-price');
      expect(cartItemElementsPrice[0]).toHaveTextContent("Price: £10")
      const cartItemElementsAmount = screen.getAllByTestId('cart-item-test-amount');
      expect(cartItemElementsAmount[0]).toHaveTextContent("Amount: 1")


    });
  
    test('Pay button is rendered', () => {
      render(<BrowserRouter>
        <ShoppingCart cartItems={cartItems} />
    </BrowserRouter>);
      const payButton = screen.getByRole('button', { name: 'Pay' });
      expect(payButton).toBeInTheDocument();
    });
});


describe('ShopCard and ShopPage Components', () => {
    test('content of each ShopCard item in ShopPage is rendered correctly', () => {
        const shopPoductsArray = [
            { id: 1, image: 'pic1', title: 'Item 1', price: 10, description: 'item 1 description', category: 'item 1 category', rating: {rate: 4.5, count: 25}},
            { id: 2, image: 'pic2', title: 'Item 2', price: 15, description: 'item 2 description', category: 'item 2 category', rating: {rate: 3.5, count: 36}},
          ];
        
        render(        
            <BrowserRouter>
                <ShopPage shopPoductsArray={shopPoductsArray}/>
            </BrowserRouter>
            );
        

        const shopItemElements = screen.getAllByTestId('shop-item');
        expect(shopItemElements.length).toBe(shopPoductsArray.length);

        const shopItemElementsPicture = screen.getAllByTestId('shop-item-picture')
        expect(shopItemElementsPicture[0]).toHaveAttribute('src', 'pic1')
        expect(shopItemElementsPicture[1]).toHaveAttribute('src', 'pic2')

        const shopCardTitle = screen.getAllByTestId('shop-item-title')
        expect(shopCardTitle[0]).toHaveTextContent("Item 1")
        expect(shopCardTitle[1]).toHaveTextContent("Item 2")


        const shopCardPrice = screen.getAllByTestId('shop-item-price')
        expect(shopCardPrice[0]).toHaveTextContent("Price: £10")
        expect(shopCardPrice[1]).toHaveTextContent("Price: £15")


        const shopCardDescription = screen.getAllByTestId('shop-item-description')
        expect(shopCardDescription[0]).toHaveTextContent("Description: item 1 description")
        expect(shopCardDescription[1]).toHaveTextContent("Description: item 2 description")


        const shopCardCategory = screen.getAllByTestId('shop-item-category')
        expect(shopCardCategory[0]).toHaveTextContent("Category: item 1 category")
        expect(shopCardCategory[1]).toHaveTextContent("Category: item 2 category")


        const shopCardRatingCount = screen.getAllByTestId('shop-item-rating-count')
        expect(shopCardRatingCount[0]).toHaveTextContent("25")
        expect(shopCardRatingCount[1]).toHaveTextContent("36")

        const shopCardAmountLabel = screen.getAllByTestId('shop-item-amount-label')
        expect(shopCardAmountLabel[0]).toHaveTextContent("Amount:")
        expect(shopCardAmountLabel[1]).toHaveTextContent("Amount:")

        const shopCardIncrementButton = screen.getAllByTestId('shop-item-increment-button')
        expect(shopCardIncrementButton[0]).toHaveTextContent("Increment Amount")
        expect(shopCardIncrementButton[1]).toHaveTextContent("Increment Amount")

        const shopCardDecrementButton = screen.getAllByTestId('shop-item-decrement-button')
        expect(shopCardDecrementButton[0]).toHaveTextContent("Decrement Amount")
        expect(shopCardDecrementButton[1]).toHaveTextContent("Decrement Amount")

        const shopCardAddToCartButton = screen.getAllByTestId('shop-item-add-to-cart-button')
        expect(shopCardAddToCartButton[0]).toHaveTextContent("Add To Cart")
        expect(shopCardAddToCartButton[1]).toHaveTextContent("Add To Cart")
        "shop-item-amount-input"
        
    })
    const shopPoductsArray = [
        { id: 1, image: 'pic1', title: 'Item 1', price: 10, description: 'item 1 description', category: 'item 1 category', rating: {rate: 4.5, count: 25}},
        { id: 2, image: 'pic2', title: 'Item 2', price: 15, description: 'item 2 description', category: 'item 2 category', rating: {rate: 3.5, count: 36}},
      ];
    

    const setup = () => {
        const utils = render(       
            <BrowserRouter>
                <ShopPage shopPoductsArray={shopPoductsArray}/>
            </BrowserRouter>
            )
        const allInputs = screen.getAllByTestId('shop-item-amount-input')
        const input = allInputs[0]
        const allIncrementButtons = screen.getAllByTestId('shop-item-increment-button')
        const incrementButton = allIncrementButtons[0]
        const allDecrementButtons = screen.getAllByTestId('shop-item-decrement-button')
        const decrementButton = allDecrementButtons[0]
        return {
            input,
            incrementButton,
            decrementButton,
            ...utils,
        }
    }
    test('ShopCard amount changes when typed in', () => {
        const {input} = setup()
        fireEvent.change(input, {target: {value: '67'}})
        expect(input.value).toBe('67')        
    })
    test('ShopCard amount input increases when increment button is clicked', () => {
        const {input, incrementButton} = setup()
        fireEvent.click(incrementButton)
        expect(input.value).toBe('1')        
    })
    test('ShopCard amount input decreases when increment button is clicked', () => {
        const {input, decrementButton} = setup()
        fireEvent.change(input, {target: {value: '67'}})
        fireEvent.click(decrementButton)
        expect(input.value).toBe('66')        
    })
})



describe('HomePage and Carousel Components', () => {
    test('renders homepage heading', () => {
        render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
        const homepageElement = screen.getByTestId('homepage-welcome-message')
        expect(homepageElement).toHaveTextContent('Home Page')
    })
    test('renders homepage carousel pictures and text', () => {
        render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
        const homepageCarouselCard = screen.getAllByTestId('carousel-card')
        expect(homepageCarouselCard.length).toBe(3);
        const homepageCarouselCardPicture = screen.getAllByTestId('carousel-card-picture')
        expect(homepageCarouselCardPicture[0]).toHaveAttribute('src', '/src/components/immages/picone.webp')
        const homepageCarouselCardTitle = screen.getAllByTestId('carousel-title')
        expect(homepageCarouselCardTitle[0]).toHaveTextContent("Ear Rings")
        const homepageCarouselCardText = screen.getAllByTestId('carousel-text')
        expect(homepageCarouselCardText[0]).toHaveTextContent("Nulla vitae elit libero, a pharetra augue mollis interdum.")

    })
})  




/*



- shopcart title

*/