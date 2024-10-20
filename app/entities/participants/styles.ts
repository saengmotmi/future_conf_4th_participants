import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
`;

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CardSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const InfoGrid = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Icon = styled.svg`
  width: 1rem;
  height: 1rem;
`;

export const InfoText = styled.span`
  font-size: 0.875rem;
`;

export const GithubLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Introduction = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const InterestsList = styled.div`
  margin-top: 0.5rem;
`;

export const InterestsTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const InterestsUl = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 0.875rem;
`;
