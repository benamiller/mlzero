import React from 'react';
import './MLIntro.css';

const MLIntro = () => {

    return (
        <div className="courses-container">
            <div className="MLIntro">
                <h1>Machine Learning Introduction</h1>
                <h2>Course Outline</h2>
                <ul className="MLIntro-list">
                    <li>Introduction to Machine Learning</li>
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                    <li>Reinforcement Learning</li>
                    <li>Deep Learning</li>
                    <li>Transfer Learning</li>
                    <li>Model Evaluation</li>
                    <li>Model Selection</li>
                    <li>Hyperparameter Tuning</li>
                    <li>Ensemble Methods</li>
                    <li>Bias-Variance Tradeoff</li>
                    <li>Explainable AI</li>
                </ul>
                <h2 id="resources">Course Resources</h2>
                <ul>
                    <li>Course Notes</li>
                    <li>Video Lectures</li>
                    <li>Assignments</li>
                    <li>Quizzes</li>
                    <li>Practice Problems</li>
                </ul>
            </div>
            <div className="MLIntro-content">
                <h3>Supervised Learning</h3>
                // Can you make a supervised learning model that predicts the price of a house based on its size, number of bedrooms, and location?
                // What are the main challenges in building a supervised learning model?
                // How can you improve the accuracy of your model?
                // What are the different types of supervised learning algorithms?
                // Can you explain the concept of overfitting in supervised learning?
                // How can you avoid overfitting in supervised learning?
                // Can you explain the concept of underfitting in supervised learning?
                // How can you avoid underfitting in supervised learning?
                // Can you explain the concept of bias-variance tradeoff in supervised learning?
                // How can you avoid the bias-variance tradeoff in supervised learning?
                // Can you explain the concept of regularization in supervised learning?
                // How can you avoid overfitting and underfitting in supervised learning?
                // Can you explain the concept of feature selection in supervised learning?
                // How can you select the most relevant features for your model?
                // Can you explain the concept of model evaluation in supervised learning?
                // How can you evaluate the performance of your model?
                // Can you explain the concept of model selection in supervised learning?
                // How can you select the best model for your problem?
                <p>Supervised learning is a type of machine learning where the model is trained on a labeled dataset, meaning that the input data is paired with the corresponding output or target variable. The goal of supervised learning is to learn a mapping function that can predict the output variable based on the input data. This is typically done using a supervised learning algorithm, which is a type of machine learning algorithm that learns from labeled data.</p>
                <p>The main challenge in building a supervised learning model is to find the right mapping function that can accurately predict the output variable based on the input data. This requires a good understanding of the problem and the available data, as well as the ability to select the most relevant features for the model.</p>
                <p>To improve the accuracy of the model, it is important to preprocess the data and select the most relevant features. This can be done using techniques such as feature scaling, feature selection, and feature engineering. It is also important to evaluate the performance of the model using metrics such as accuracy, precision, recall, and F1 score. This will help to identify any issues with the model and make necessary adjustments.</p>
                <p>There are different types of supervised learning algorithms, including linear regression, logistic regression, decision trees, random forests, and support vector machines. Each algorithm has its own strengths and weaknesses, and the choice of algorithm depends on the specific problem and data.</p>
                <p>Overfitting and underfitting are two common issues in supervised learning. Overfitting occurs when the model is too complex and captures noise in the data, while underfitting occurs when the model is too simple and fails to capture the underlying patterns in the data. To avoid overfitting, it is important to use regularization techniques such as L1 and L2 regularization. To avoid underfitting, it is important to use techniques such as cross-validation and early stopping.</p>
                <p>Bias-variance tradeoff is a concept in supervised learning where the model's performance is measured in terms of its bias and variance. Bias refers to the error introduced by the model, while variance refers to the error due to the model's sensitivity to the training data. To avoid the bias-variance tradeoff, it is important to use techniques such as regularization and feature selection.</p>
                <p>Explainable AI is a concept in supervised learning where the model's performance can be explained by its input features and output. This is important because it allows users to understand how the model makes predictions and can help to identify any issues with the model.</p>



            </div>
        </div>
    );
};

export default MLIntro;
