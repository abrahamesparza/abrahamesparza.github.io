class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedin: 'https://www.linkedin.com/in/abrahamesparza/',
      github: 'https://github.com/abrahamesparza',
      gmail: 'abrahamesparza.us@gmail.com'
    };
  }

  render() {
    let {
      linkedin,
      github,
      gmail
    } = this.state;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "header"
    }, "A B R A H A M \xA0 E S P A R Z A"), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Footer, {
      linkedin: linkedin,
      github: github,
      gmail: gmail
    }));
  }

}

;

const About = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "about"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h3-text"
  }, "About"), /*#__PURE__*/React.createElement("p", null, "Data Analytics / Retains Manager at ", /*#__PURE__*/React.createElement("a", {
    className: "bh",
    href: "https://www.bolthouse.com/"
  }, "Bolthouse Farms"), ".", /*#__PURE__*/React.createElement("br", null), "Seeking full time employment as a Software Engineer:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Frontend"), /*#__PURE__*/React.createElement("li", null, "Backend"), /*#__PURE__*/React.createElement("li", null, "Fullstack")), "Available for full time work remotely.", /*#__PURE__*/React.createElement("br", null), "Open to relocate for onsite.", /*#__PURE__*/React.createElement("br", null)));
};

const Projects = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "projects"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h3.text"
  }, "Projects"), /*#__PURE__*/React.createElement("p", null, "Currently working on displaying projects."));
};

const Footer = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "linkedin-icon",
    href: props.linkedin
  }, "LinkedIn")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "github-icon",
    href: props.github
  }, "Github")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "gmail-icon",
    href: props.gmail
  }, "Gmail")));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibGlua2VkaW4iLCJnaXRodWIiLCJnbWFpbCIsInJlbmRlciIsIkFib3V0IiwiUHJvamVjdHMiLCJGb290ZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsUUFBUSxFQUFFLDZDQURDO0FBRVhDLE1BQUFBLE1BQU0sRUFBRSxtQ0FGRztBQUdYQyxNQUFBQSxLQUFLLEVBQUU7QUFISSxLQUFiO0FBS0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFFBQUk7QUFBQ0gsTUFBQUEsUUFBRDtBQUFXQyxNQUFBQSxNQUFYO0FBQW1CQyxNQUFBQTtBQUFuQixRQUE0QixLQUFLSCxLQUFyQztBQUNBLHdCQUNFLDhDQUNFO0FBQUksTUFBQSxTQUFTLEVBQUM7QUFBZCwwQ0FERixlQUVFLG9CQUFDLEtBQUQsT0FGRixlQUdFLG9CQUFDLFFBQUQsT0FIRixlQUlFLG9CQUFDLE1BQUQ7QUFBUSxNQUFBLFFBQVEsRUFBRUMsUUFBbEI7QUFBNEIsTUFBQSxNQUFNLEVBQUVDLE1BQXBDO0FBQTRDLE1BQUEsS0FBSyxFQUFFQztBQUFuRCxNQUpGLENBREY7QUFRRDs7QUFyQitCOztBQXNCakM7O0FBRUQsTUFBTUUsS0FBSyxHQUFJTixLQUFELElBQVc7QUFDdkIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxhQURGLGVBRUUsb0ZBQ3NDO0FBQUcsSUFBQSxTQUFTLEVBQUMsSUFBYjtBQUFrQixJQUFBLElBQUksRUFBQztBQUF2Qix1QkFEdEMsb0JBQzhHLCtCQUQ5Ryx1RUFFc0QsK0JBRnRELGVBR0UsNkNBQ0UsMkNBREYsZUFJRSwwQ0FKRixlQU9FLDRDQVBGLENBSEYseURBY3dDLCtCQWR4QywrQ0FlOEIsK0JBZjlCLENBRkYsQ0FERjtBQXNCRCxDQXZCRDs7QUF5QkEsTUFBTU8sUUFBUSxHQUFJUCxLQUFELElBQVc7QUFDMUIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxnQkFERixlQUVFLDJFQUZGLENBREY7QUFRRCxDQVREOztBQVdBLE1BQU1RLE1BQU0sR0FBSVIsS0FBRCxJQUFXO0FBQ3hCLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSSw0Q0FBRztBQUFHLElBQUEsU0FBUyxFQUFDLGVBQWI7QUFBNkIsSUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ0U7QUFBekMsZ0JBQUgsQ0FESixlQUVJLDRDQUFHO0FBQUcsSUFBQSxTQUFTLEVBQUMsYUFBYjtBQUEyQixJQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDRztBQUF2QyxjQUFILENBRkosZUFHSSw0Q0FBRztBQUFHLElBQUEsU0FBUyxFQUFDLFlBQWI7QUFBMEIsSUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0k7QUFBdEMsYUFBSCxDQUhKLENBREY7QUFPRCxDQVJEOztBQVVBSyxRQUFRLENBQUNKLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF3QkssUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWJyYWhhbWVzcGFyemEvJyxcbiAgICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hYnJhaGFtZXNwYXJ6YScsXG4gICAgICBnbWFpbDogJ2FicmFoYW1lc3BhcnphLnVzQGdtYWlsLmNvbSdcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7bGlua2VkaW4sIGdpdGh1YiwgZ21haWx9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPkEgQiBSIEEgSCBBIE0gJm5ic3A7IEUgUyBQIEEgUiBaIEE8L2gxPlxuICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgPFByb2plY3RzIC8+XG4gICAgICAgIDxGb290ZXIgbGlua2VkaW49e2xpbmtlZGlufSBnaXRodWI9e2dpdGh1Yn0gZ21haWw9e2dtYWlsfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmNvbnN0IEFib3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImgzLXRleHRcIj5BYm91dDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgRGF0YSBBbmFseXRpY3MgLyBSZXRhaW5zIE1hbmFnZXIgYXQgPGEgY2xhc3NOYW1lPVwiYmhcIiBocmVmPVwiaHR0cHM6Ly93d3cuYm9sdGhvdXNlLmNvbS9cIj5Cb2x0aG91c2UgRmFybXM8L2E+Ljxici8+XG4gICAgICAgIFNlZWtpbmcgZnVsbCB0aW1lIGVtcGxveW1lbnQgYXMgYSBTb2Z0d2FyZSBFbmdpbmVlcjo8YnIvPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgIEZyb250ZW5kXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgQmFja2VuZFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgIEZ1bGxzdGFja1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIEF2YWlsYWJsZSBmb3IgZnVsbCB0aW1lIHdvcmsgcmVtb3RlbHkuPGJyLz5cbiAgICAgICAgT3BlbiB0byByZWxvY2F0ZSBmb3Igb25zaXRlLjxici8+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmNvbnN0IFByb2plY3RzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1wiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImgzLnRleHRcIj5Qcm9qZWN0czwvaDM+XG4gICAgICA8cD5cbiAgICAgIEN1cnJlbnRseSB3b3JraW5nIG9uIGRpc3BsYXlpbmcgcHJvamVjdHMuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgIDxwPjxhIGNsYXNzTmFtZT1cImxpbmtlZGluLWljb25cIiBocmVmPXtwcm9wcy5saW5rZWRpbn0+TGlua2VkSW48L2E+PC9wPlxuICAgICAgICA8cD48YSBjbGFzc05hbWU9XCJnaXRodWItaWNvblwiIGhyZWY9e3Byb3BzLmdpdGh1Yn0+R2l0aHViPC9hPjwvcD5cbiAgICAgICAgPHA+PGEgY2xhc3NOYW1lPVwiZ21haWwtaWNvblwiIGhyZWY9e3Byb3BzLmdtYWlsfT5HbWFpbDwvYT48L3A+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19